import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Header from './components/Header';
import Container from './components/Container';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          {/* display container on / */}
          <Route path='/' element={<Container />} />
          {/* Display a new about- component on /about */}
          <Route path='/about' element={<div>This is my about page. Need to create a component for this!</div>} />
          <Route path='*' element={<div> Page not found</div>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
