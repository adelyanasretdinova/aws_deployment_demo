import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import NewItem from "./components/NewItem";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { useState } from "react";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Header isLoggedIn={loggedIn} />
        <Routes>
          {loggedIn ? (
            <Route path="/" element={<Container />} />
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
          {loggedIn ? (
            <Route path="/newItem" element={<NewItem />} />
          ) : (
            <Route
              path="/newItem"
              element={<Navigate to="/registration" replace />}
            />
          )}
          <Route path="*" element={<div> Page not found</div>} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
