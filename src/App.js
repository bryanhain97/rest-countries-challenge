import './App.css';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import MainSection from './components/MainSection/MainSection';

function App() {

  return (
    <div className="app">
      <Navbar />
      <Searchbar />
      <MainSection />
    </div>
  );
}

export default App;
