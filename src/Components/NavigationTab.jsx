import React from "react";
import "../Styles/NavigationTab.css";
import { nameFormatter } from "../lib/generalFunctions";

function NavigationTab({ tabName }) {
  return (
    <div className="navigation-tab">
      <img
        className={`navigation-tab--tab-icon navigation-tab--${tabName}-icon`}
        src={`assets/${tabName}-icon.png`}
        alt=""
      />{" "}
      <div className="navigation-tab--tab-name">{nameFormatter(tabName)}</div>
    </div>
  );
}

export default NavigationTab;
