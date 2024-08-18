import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext"; // Assuming you have a ThemeContext to track dark mode

const PredictForm = () => {
  const { theme } = useContext(ThemeContext); // Get the current theme
  const [formData, setFormData] = useState({
    gender: "",
    ethnicity: "",
    parental_level_of_education: "",
    lunch: "",
    test_preparation_course: "",
    writing_score: "",
    reading_score: "",
  });

  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.ethnicity) newErrors.ethnicity = "Ethnicity is required";
    if (!formData.parental_level_of_education)
      newErrors.parental_level_of_education =
        "Parental level of education is required";
    if (!formData.lunch) newErrors.lunch = "Lunch type is required";
    if (!formData.test_preparation_course)
      newErrors.test_preparation_course = "Test preparation course is required";
    if (!formData.writing_score)
      newErrors.writing_score = "Writing score is required";
    if (!formData.reading_score)
      newErrors.reading_score = "Reading score is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const response = await fetch("/predictdata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setResult(data.prediction);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div
        className={`card max-w-xl rounded-lg shadow-lg p-8 w-full ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
      >
        <Link to="/" className="text-blue-500 underline mb-4 block">
          Back to Home
        </Link>
        <h1 className="text-2xl font-medium text-center mb-6">
          Student Exam Performance Indicator
        </h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`mt-1 block w-full p-2 border rounded focus:outline-none ${
                theme === "dark"
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-gray-900 border-gray-300"
              }`}
              required
            >
              <option disabled value="">
                Select
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">
              Race or Ethnicity
            </label>
            <select
              name="ethnicity"
              value={formData.ethnicity}
              onChange={handleChange}
              className={`mt-1 block w-full p-2 border rounded focus:outline-none ${
                theme === "dark"
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-gray-900 border-gray-300"
              }`}
              required
            >
              <option disabled value="">
                Select Ethnicity
              </option>
              <option value="group A">Group A</option>
              <option value="group B">Group B</option>
              <option value="group C">Group C</option>
              <option value="group D">Group D</option>
              <option value="group E">Group E</option>
            </select>
            {errors.ethnicity && (
              <p className="text-red-500 text-xs mt-1">{errors.ethnicity}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">
              Parental Level of Education
            </label>
            <select
              name="parental_level_of_education"
              value={formData.parental_level_of_education}
              onChange={handleChange}
              className={`mt-1 block w-full p-2 border rounded focus:outline-none ${
                theme === "dark"
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-gray-900 border-gray-300"
              }`}
              required
            >
              <option disabled value="">
                Select Education
              </option>
              <option value="associate's degree">Associate's degree</option>
              <option value="bachelor's degree">Bachelor's degree</option>
              <option value="high school">High school</option>
              <option value="master's degree">Master's degree</option>
              <option value="some college">Some college</option>
              <option value="some high school">Some high school</option>
            </select>
            {errors.parental_level_of_education && (
              <p className="text-red-500 text-xs mt-1">
                {errors.parental_level_of_education}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Lunch Type</label>
            <select
              name="lunch"
              value={formData.lunch}
              onChange={handleChange}
              className={`mt-1 block w-full p-2 border rounded focus:outline-none ${
                theme === "dark"
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-gray-900 border-gray-300"
              }`}
              required
            >
              <option disabled value="">
                Select Lunch Type
              </option>
              <option value="free/reduced">Free/reduced</option>
              <option value="standard">Standard</option>
            </select>
            {errors.lunch && (
              <p className="text-red-500 text-xs mt-1">{errors.lunch}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">
              Test Preparation Course
            </label>
            <select
              name="test_preparation_course"
              value={formData.test_preparation_course}
              onChange={handleChange}
              className={`mt-1 block w-full p-2 border rounded focus:outline-none ${
                theme === "dark"
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-gray-900 border-gray-300"
              }`}
              required
            >
              <option disabled value="">
                Select Test Course
              </option>
              <option value="none">None</option>
              <option value="completed">Completed</option>
            </select>
            {errors.test_preparation_course && (
              <p className="text-red-500 text-xs mt-1">
                {errors.test_preparation_course}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">
              Writing Score (out of 100)
            </label>
            <input
              type="number"
              name="writing_score"
              min="0"
              max="100"
              placeholder="Enter Writing score"
              value={formData.writing_score}
              onChange={handleChange}
              className={`mt-1 block w-full p-2 border rounded focus:outline-none ${
                theme === "dark"
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-gray-900 border-gray-300"
              }`}
              required
            />
            {errors.writing_score && (
              <p className="text-red-500 text-xs mt-1">
                {errors.writing_score}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">
              Reading Score(out of 100)
            </label>
            <input
              type="number"
              name="reading_score"
              min="0"
              max="100"
              placeholder="Enter Reading score"
              value={formData.reading_score}
              onChange={handleChange}
              className={`mt-1 block w-full p-2 border rounded focus:outline-none ${
                theme === "dark"
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-gray-900 border-gray-300"
              }`}
              required
            />
            {errors.reading_score && (
              <p className="text-red-500 text-xs mt-1">
                {errors.reading_score}
              </p>
            )}
          </div>

          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="btn py-3 px-6 rounded-full hover:shadow-lg transition duration-300"
            >
              Predict Math Score
            </button>
          </div>
        </form>

        {result && (
          <h2 className="text-lg font-medium text-center text-green-600 mt-4">
            The prediction is: {result}
          </h2>
        )}
      </div>
    </div>
  );
};

export default PredictForm;
