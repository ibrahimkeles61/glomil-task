import React from "react";
import "../Styles/NavigationTab.css";
import { tabNameFormatter } from "../lib/generalFunctions";

function NavigationTab({ tabName }) {
  return (
    <div className="navigationTab">
      <img
        className={`tabIcon ${tabName}-icon`}
        src={`assets/${tabName}-icon.png`}
        alt=""
      />{" "}
      <div className="tabName">{tabNameFormatter(tabName)}</div>
    </div>
  );
}

export default NavigationTab;
