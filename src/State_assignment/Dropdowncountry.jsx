import React, { useState } from 'react';

const CountryStatesDropdown = () => {
  // Array of objects representing countries and their states
  const countries = [
    {
      name: 'India',
      states: ['Select State', 'Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Uttar Pradesh'],
    },
    {
      name: 'Pakistan',
      states: ['Select State', 'Punjab', 'Sindh', 'Balochistan', 'Khyber Pakhtunkhwa'],
    },
  ];

  const [selectedCountry, setSelectedCountry] = useState('Select Country');
  const [selectedState, setSelectedState] = useState('Select State');
  const [statesDropdown, setStatesDropdown] = useState([]);

  // Function to handle country selection
  const handleCountryChange = (e) => {
    const selectedCountryName = e.target.value;
    setSelectedCountry(selectedCountryName);

    // Find the selected country object
    const selectedCountryObj = countries.find(country => country.name === selectedCountryName);

    // Set states dropdown options based on selected country
    if (selectedCountryObj) {
      setStatesDropdown(selectedCountryObj.states);
      setSelectedState('Select State'); // Reset state dropdown when country changes
    } else {
      setStatesDropdown([]);
    }
  };

  // Function to handle state selection
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  return (
    <div>
      <label htmlFor="country">Select Country:</label>
      <select id="country" value={selectedCountry} onChange={handleCountryChange}>
        <option value="Select Country">Select Country</option>
        {countries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      {selectedCountry !== 'Select Country' && (
        <div>
          <label htmlFor="state">Select State:</label>
          <select id="state" value={selectedState} onChange={handleStateChange}>
            {statesDropdown.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default CountryStatesDropdown;