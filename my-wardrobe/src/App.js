import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import NewItem from "./components/NewItem";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { useState } from "react";

const App = () => {
  // vanillaJS
  function isJSON(str) {
    try {
      return JSON.parse(str) && !!str;
    } catch (e) {
      localStorage.removeItem("token");
      return false;
    }
  }
  const token = localStorage.getItem("token");
  const [loggedIn, setLoggedIn] = useState(token && isJSON(token));
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          {loggedIn ? (
            <Route path="/" element={<Container setLoggedIn={setLoggedIn} />} />
          ) : (
            <Route path="/" element={<Navigate to="/registration" replace />} />
          )}
          <Route
            path="/about"
            element={
              <div>
                This is my about page. Need to create a component for this!
              </div>
            }
          />
          <Route
            path="/newItem"
            element={<NewItem setLoggedIn={setLoggedIn} />}
          />
          <Route path="*" element={<div> Page not found</div>} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
