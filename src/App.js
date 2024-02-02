import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroBanner from './components/HeroBanner/HeroBanner';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const apiURL = `${process.env.REACT_APP_APIURL}?title=${searchValue}`;

  const getSearchResults = async () => {
    try {
      const response = await fetch(apiURL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      if (searchValue.length !== 0) {
        const filteredProducts = data.filter(product => product.title.includes(searchValue));
        if (filteredProducts && filteredProducts.length > 0) {
          setSearchResults(filteredProducts);
          setSearchValue("");
        }
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    getSearchResults();
  }, [searchValue, apiURL]);

  return (
    <div className="app">
      <HeroBanner />
      <SearchBar setSearchValue={setSearchValue} />
      <SearchResults searchResults={searchResults} />
    </div>
  );
}

export default App;
