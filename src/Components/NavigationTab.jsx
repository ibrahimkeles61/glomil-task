import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../Styles/NavigationTab.css";
import { nameFormatter } from "../lib/generalFunctions";
import { addNewPageToPath } from "../features/pages/pagesSlice";

function NavigationTab({ tab }) {
  const { sectionName } = tab;
  const dispatch = useDispatch();

  const handleAddToPath = (pageObj) => dispatch(addNewPageToPath(pageObj));

  return (
    <Link
      to={sectionName}
      onClick={() => handleAddToPath(tab)}
      className="navigation-tab"
    >
      <img
        className={`navigation-tab--tab-icon navigation-tab--${sectionName}-icon`}
        src={`assets/${sectionName}-icon.png`}
        alt=""
      />
      <div className="navigation-tab--tab-name">
        {nameFormatter(sectionName)}
      </div>
    </Link>
  );
}

export default NavigationTab;
