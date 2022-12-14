import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
// import Create from './views/Create';
import Form from './components/Form';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <h1>Favorite authors</h1>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/new" element={<Form />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
