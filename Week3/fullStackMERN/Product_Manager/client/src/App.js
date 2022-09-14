import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Details from './views/Details';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/:id/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
