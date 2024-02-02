import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroBanner from './components/HeroBanner/HeroBanner';
import SearchBar from './components/SearchBar/SearchBar';
import { useState } from 'react';

function App() {

  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="app">
      <HeroBanner></HeroBanner>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}></SearchBar>
    </div >
  );
}

export default App;
