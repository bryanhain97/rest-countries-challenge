import './App.css';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';

function App() {

  return (
    <div className="app">
      <Navbar />
      <Searchbar />
      <main className="main-section">
      </main>
    </div>
  );
}

export default App;
