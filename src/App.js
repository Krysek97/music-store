import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './main/Navbar';
import Pages from './main/Pages';

function App() {
  return (
    <div class='body'>
      <Navbar></Navbar>
      <BrowserRouter>
        <Pages></Pages>
      </BrowserRouter>
    </div>
  );
}

export default App;
