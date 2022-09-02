import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard fName = "Prue" lName = "Halliwell" age = {29} hairColor = "Black" />
      <PersonCard fName = "Piper" lName = "Halliwell" age = {25} hairColor = "Black" />
      <PersonCard fName = "Pheobe" lName = "Halliwell" age = {23} hairColor = "Brown" />
      <PersonCard fName = "Paige" lName = "Matthews" age = {21} hairColor = "Red" />
    </div>
  );
}

export default App;
