import React from "react";
import { hot } from "react-hot-loader/root";
import Main from "./components/Main.js";
import Categories from "./components/Categories.js";
const App = () => {
  return (
    <div className="App">
      <Categories />
      <Main />
    </div>
  );
};

export default hot(App);
