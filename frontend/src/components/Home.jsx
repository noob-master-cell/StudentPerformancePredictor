import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-xl card rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold mb-6">
          Student Performance Predictor
        </h1>
        <p className="text-lg mb-8">
          Predict student exam performance based on various demographic and
          academic features using machine learning models.
        </p>
        <div className="flex justify-center mb-6 space-x-4">
          <a
            href="https://github.com/yourusername/student-performance-prediction"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition duration-150"
          >
            <FaGithub size={30} />
          </a>
        </div>
        <Link to="/predictdata">
          <button className="btn py-3 px-6 rounded-full hover:shadow-lg transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
