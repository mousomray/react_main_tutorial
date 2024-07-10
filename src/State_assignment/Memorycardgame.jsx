import React, { useState, useEffect } from 'react';
import './memoricard.css';

const TOTAL_CARDS = 36;
const TOTAL_PAIRS = TOTAL_CARDS / 2;
const CARD_VALUES = Array.from(Array(TOTAL_PAIRS), (_, index) => index + 1);

function shuffleArray(array) {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function App() {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  // Initialize cards on mount
  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    let initialCards = [];
    const shuffledValues = shuffleArray([...CARD_VALUES, ...CARD_VALUES]);

    for (let i = 0; i < TOTAL_CARDS; i++) {
      initialCards.push({
        id: i,
        value: shuffledValues[i],
        isMatched: false,
        isRevealed: false
      });
    }

    setCards(initialCards);
    setSelectedCards([]);
    setIsProcessing(false);
  };

  const handleCardClick = (cardId) => {
    if (isProcessing) return;

    let updatedCards = [...cards];
    let updatedSelectedCards = [...selectedCards];

    const selectedCard = updatedCards.find(card => card.id === cardId);

    if (selectedCard.isRevealed || selectedCard.isMatched || updatedSelectedCards.length === 2) {
      return;
    }

    selectedCard.isRevealed = true;
    updatedSelectedCards.push(selectedCard);
    setSelectedCards(updatedSelectedCards);

    if (updatedSelectedCards.length === 2) {
      setIsProcessing(true);
      setTimeout(() => checkForMatch(updatedSelectedCards), 1000);
    }

    setCards(updatedCards);
  };

  const checkForMatch = (selectedCardsToCheck) => {
    const [firstCard, secondCard] = selectedCardsToCheck;

    if (firstCard.value === secondCard.value) {
      markAsMatched(firstCard, secondCard);
    } else {
      hideCards(firstCard, secondCard);
    }

    setSelectedCards([]);
    setIsProcessing(false);
  };

  const markAsMatched = (firstCard, secondCard) => {
    let updatedCards = [...cards];
    updatedCards[firstCard.id].isMatched = true;
    updatedCards[secondCard.id].isMatched = true;
    setCards(updatedCards);
  };

  const hideCards = (firstCard, secondCard) => {
    let updatedCards = [...cards];

    setTimeout(() => {
      updatedCards[firstCard.id].isRevealed = false;
      updatedCards[secondCard.id].isRevealed = false;
      setCards(updatedCards);
    }, 1000);
  };

  const isGameOver = () => {
    return cards.every(card => card.isMatched);
  };

  return (
    <div className="app">
      <h1>Memory Card Game</h1>
      <div className="grid">
        {cards.map(card => (
          <div
            key={card.id}
            className={`card ${card.isRevealed || card.isMatched ? 'revealed' : ''}`}
            onClick={() => handleCardClick(card.id)}
          >
            {card.isRevealed || card.isMatched ? card.value : ' '}
          </div>
        ))}
      </div>
      {isGameOver() && (
        <button onClick={initializeGame}>Play Again</button>
      )}
    </div>
  );
}

export default App;
