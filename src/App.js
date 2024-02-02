import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroBanner from './components/HeroBanner/HeroBanner';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import { useState } from 'react';


function App() {

  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const apiURL = process.env.REACT_APP_APIURL + "?title=" + searchValue;

  const getSearchResults = (apiURL) => {
    fetch(apiURL)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (searchValue.length !== 0) {
          const filteredProducts = data.filter(product => product.title.includes(searchValue));
          if (filteredProducts !== undefined) {
            setSearchResults(filteredProducts);
            setSearchValue("");
          }

        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });

  }

  getSearchResults(apiURL);

  return (
    <div className="app">
      <HeroBanner></HeroBanner>
      <SearchBar setSearchValue={setSearchValue}></SearchBar>
      <SearchResults searchResults={searchResults}></SearchResults>
    </div >
  );
}

export default App;
