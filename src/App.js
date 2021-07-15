import './App.css';
import Compteur from './components/compteur/compteur';

function App() {
  return (
    <div className="App">
      <Compteur incr={3} />
    </div>
  );
}

export default App;
