import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";

// Routes
import Homepage from './pages/Homepage';
import SinglePokemon from './pages/SinglePokemon';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/pokemon/:name" element={<SinglePokemon />} />
    </Routes>
  );
}

export default App;
