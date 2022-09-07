import './App.css';
import { Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import People from './components/People';
import Planet from './components/Planet';
import Film from './components/Film';

function App() {
  return (
    <div className="App">
      <Form />
      <Routes>
        <Route path='/' element={<h1>C3PO says, "Hello!"</h1>} />
        <Route path='/people/:id' element={<People />} />
        <Route path='/planets/:id' element={<Planet />}/>
        <Route path='/films/:id' element={<Film />}/>
      </Routes>
    </div>
  );
}

export default App;
