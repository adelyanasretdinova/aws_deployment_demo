import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import NewItem from "./components/NewItem";
import Registration from "./components/Registration";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route
            path="/about"
            element={
              <div>
                This is my about page. Need to create a component for this!
              </div>
            }
          />
          <Route path="*" element={<div> Page not found</div>} />
          <Route path="/newItem" element={<NewItem />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
