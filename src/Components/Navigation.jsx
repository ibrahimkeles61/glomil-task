import React, { useState } from "react";
import "../Styles/Navigation.css";

import NavigationTab from "./NavigationTab";

function Navigation() {
  const [services, setServices] = useState([
    {
      id: "pg1",
      sectionName: "home",
    },
    {
      id: "pg2",
      sectionName: "studio",
    },
    {
      id: "pg3",
      sectionName: "datasources",
    },
    {
      id: "pg4",
      sectionName: "flow-machine",
    },
    {
      id: "pg5",
      sectionName: "micro-functions",
    },
    {
      id: "pg6",
      sectionName: "gateway",
    },
    {
      id: "pg7",
      sectionName: "file-storage",
    },
  ]);

  const [categories, setCategories] = useState([
    {
      id: "ctg1",
      sectionName: "application-manager",
    },
    {
      id: "ctg2",
      sectionName: "monitoring",
    },
    {
      id: "ctg3",
      sectionName: "console",
    },
  ]);

  return (
    <div className="navigation">
      <div className="allServices">
        <p>Tüm Hizmetler</p>
        <div className="tabs">
          {services.map((e) => (
            <NavigationTab key={e.id} tabName={e.sectionName} />
          ))}
        </div>
      </div>
      <div className="categories">
        <p>Kategoriler</p>
        <div className="tabs">
          {categories.map((e) => (
            <NavigationTab key={e.id} tabName={e.sectionName} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
