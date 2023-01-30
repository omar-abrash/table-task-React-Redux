// import React from 'react'
import { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const [navArray, setNavArray] = useState([]);
  const numberOfPages = useSelector((state) => state.mainData.numberOfPages);
  // helper Func
  const navigationList = useCallback(() => {
    let navigationArray = [];
    for (let i = 1; i <= numberOfPages; i++) {
      let item = (
        <li key={`page${i}`}>
          <NavLink
            to={`page${i}`}
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            {i}
          </NavLink>
        </li>
      );
      navigationArray.push(item);
    }
    setNavArray((prevState) => navigationArray);
  }, [numberOfPages]);
  //
  useEffect(() => {
    navigationList();
  }, [navigationList]);
  //
  return (
    <nav className={classes.main}>
      <ul>{navArray}</ul>
    </nav>
  );
};

export default Navigation;
