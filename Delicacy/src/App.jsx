import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
// import Favorite from "./components/Favorite/Favorite";
import Detail from "./components/Detail/Detail";
import "./app.scss";
import { apiURL } from "./components/Domain/api";

function App() {
  const [currentCategory, setCurrentCategory] = useState("Beef");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMealData = async () => {
      try {
        const response = await fetch(`${apiURL}/search.php?s=${currentCategory}`);
        if (!res.ok) throw new Error("Something went wrong!");
        const data = await response.json();
        fetchMealData(data.meals); // Assuming the API returns a 'meals' property
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMealData();
  }, [currentCategory]); // Empty dependency array ensures useEffect runs once after the component mounts

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  return (
    <>
      <body>
        <div className="header">
          <div className="container">
            <h5>Delicacy</h5>
            <div className="menu">
              <a href="#" onClick={() => handleCategoryChange("Beef")}>
                <p>Beef</p>
              </a>
              <a href="#" onClick={() => handleCategoryChange("Chicken")}>
                <p>Chicken</p>
              </a>
              <a href="#" onClick={() => handleCategoryChange("Dessert")}>
                <p>Dessert</p>
              </a>
              <a href="#" onClick={() => handleCategoryChange("Lamb")}>
                <p>Lamb</p>
              </a>
              <a href="#" onClick={() => handleCategoryChange("Miscellaneous")}>
                <p>Miscellaneous</p>
              </a>
              <a href="#" onClick={() => handleCategoryChange("Pasta")}>
                <p>Pasta</p>
              </a>
              <a href="#" onClick={() => handleCategoryChange("Favorite")}>
                <p>Favorite</p>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path='/delicacy/:delicacyFavorite' element = {<Favorite/>} /> */}
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </div>
      </body>
    </>
  );
}

export default App;
