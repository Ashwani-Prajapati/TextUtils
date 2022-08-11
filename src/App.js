import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
   const [mode, setMode] = useState("white");
   const [alert, setAlert] = useState(null);

   const showAlert = (message, type) => {
      setAlert({
         message: message,
         type: type,
      });
      setTimeout(() => {
         setAlert(null);
      }, 1500);
   };

   const toggleMode = () => {
      if (mode === "white") {
         setMode("black");
         document.body.style.background = "#1a2447";
         showAlert("Dark mode has been enabled.", "success");
         document.title = "TextUtils - DarkMode";
      } else {
         setMode("white");
         document.body.style.background = "white";
         showAlert("Light mode has been enabled.", "success");
         document.title = "TextUtils - LightMode";
      }
   };

   return (
      <>
         <Router>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <Routes>
               <Route exact path="/about" element={<About />} />

               <Route exact path="/" element={<TextForm heading="Enter your text below to analyze" mode={mode} showAlert={showAlert} />} />
            </Routes>
         </Router>
      </>
   );
}

export default App;
