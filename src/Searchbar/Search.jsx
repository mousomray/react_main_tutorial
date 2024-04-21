import React, { useEffect, useState } from "react";

export default function Search() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [output, setOutput] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setOutput(data.products);
      });
  }, []);
  
  useEffect(() => {
    if (search) {
      const handleApi = async () => {
        try {
          let response = await fetch(
            `https://dummyjson.com/products/search?q=${search}`
          );
          let data = await response.json();
          setOutput(data.products);
        } catch (error) {
          console.error(error);
        }
      };

      const delayTimer = setTimeout(() => {
        handleApi();
      }, 2000);
    }
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
  };

  return (
    <section>
      <p>
        How can you use the useEffect hook to search with debounce before making
        an API call?
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name=""
          id=""
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      <br />

      {output.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </section>
  );
}
