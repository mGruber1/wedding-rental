import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Cart from './components/Cart/Cart';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage
            setSearchValue={setSearchValue}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            cart={cart}
            addToCart={addToCart}>
          </LandingPage>}>
          </Route>
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
