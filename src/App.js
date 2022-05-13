import "./App.css";
// import About from "./Components/About"; 
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
/* import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; */

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  return (
    <>
      {/*<Router>*/}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-5">
        <TextForm Heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
          {/*<Routes>
          <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm Heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        
      </Router>*/}
      </div>
    </>
  );
}

export default App;
