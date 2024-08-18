import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="w-full py-4 px-8 shadow-md flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="text-lg font-bold">
          Student Predictor
        </Link>
      </div>
      <div className="flex items-center">
        <Link to="/" className="mr-6">
          Home
        </Link>
        <Link to="/predictdata" className="mr-6">
          Predict
        </Link>
        <button onClick={toggleTheme} className="focus:outline-none">
          {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
