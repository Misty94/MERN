import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Details from './views/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
