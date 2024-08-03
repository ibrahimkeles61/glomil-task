import React from "react";
import "../Styles/NavigationTab.css";
import { nameFormatter } from "../lib/generalFunctions";

function NavigationTab({ tabName }) {
  return (
    <div className="navigationTab">
      <img
        className={`tabIcon ${tabName}-icon`}
        src={`assets/${tabName}-icon.png`}
        alt=""
      />{" "}
      <div className="tabName">{nameFormatter(tabName)}</div>
    </div>
  );
}

export default NavigationTab;
