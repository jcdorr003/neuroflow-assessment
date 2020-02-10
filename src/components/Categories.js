import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <Link to="/meditation">Meditation</Link>
      <Link to="/breathing">Breathing</Link>
      <Link to="/relaxation">Relaxation</Link>
      <Link to="/all">All</Link>
    </div>
  );
};
export default Categories;
