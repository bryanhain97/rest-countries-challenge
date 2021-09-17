import './App.css';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import MainSection from './components/MainSection/MainSection';
import { useState } from 'react';

function App() {
  const [lightMode, setLightMode] = useState(true);
  return (
    <div className={lightMode ? 'app-light' : 'app-dark'}>
      <Navbar lightmode={lightMode} handleLightMode={() => setLightMode(!lightMode)}/>
      <Searchbar />
      <MainSection />
    </div>
  );
}

export default App;
