import './App.css';
import Home from './components/Home';
import Word from './components/Word';
import Combination from './components/Combination';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:input' element={<Word/>}/>
        <Route path='/:word/:textColor/:bgColor' element={<Combination/>}/>
      </Routes>
    </div>
  );
}

export default App;
