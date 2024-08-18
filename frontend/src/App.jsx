import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PredictForm from "./components/PredictForm";
import Header from "./components/Header";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predictdata" element={<PredictForm />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
