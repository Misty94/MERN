import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = {"Tommy"} lastName = {"Pickles"} age = {13} hairColor = {"Purple"}/>
      <PersonCard firstName = {"Eliza"} lastName = {"Thornberry"} age = {9} hairColor = {"Red"}/>
      <PersonCard firstName = {"Harry"} lastName = {"Potter"} age = {17} hairColor = {"Brown"}/>
      <PersonCard firstName = {"Sabrina"} lastName = {"Spellman"} age = {16} hairColor = {"Blonde"}/>
    </div>
  );
}

export default App;
