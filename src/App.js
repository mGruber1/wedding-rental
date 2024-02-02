import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroBanner from './components/HeroBanner/HeroBanner';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="app">
      <HeroBanner></HeroBanner>
      <SearchBar></SearchBar>
    </div >
  );
}

export default App;
