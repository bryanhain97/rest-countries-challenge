import './App.css';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import MainSection from './components/MainSection/MainSection';
import { useState, useEffect } from 'react';

function App() {
  const [lightMode, setLightMode] = useState(true);
  const [data, setData] = useState([]);
  const BASE_URL = 'https://restcountries.eu/rest/v2/all';
  // const [currentInput, setCurrentInput] = useState();
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(dataJSON => setData(dataJSON));
  }, []);

  return (
    <div className={lightMode ? 'app-light' : 'app-dark'}>
      <Navbar lightmode={lightMode} handleLightMode={() => setLightMode(!lightMode)} />
      <Searchbar dataJSON={data} />
      <MainSection dataJSON={data} />
    </div>
  );
}

export default App;
