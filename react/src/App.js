//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:8025/data")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setData(data)
      });
  }, []);

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
      <h1>Test</h1>
      {( typeof data.users == "undefined" ) ? (
        <p>Loading..</p> 
      ) : (
          data.users.map((user, i) => (
            <p key="{i}">{i} {user}</p>
          )
        )
      )}
    </div>
  );
}

export default App;
