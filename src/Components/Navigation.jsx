import React, { useState } from "react";
import "../Styles/Navigation.css";

import NavigationTab from "./NavigationTab";

function Navigation() {
  const [services, setServices] = useState([
    {
      id: 1,
      service: "home",
    },
    {
      id: 2,
      service: "studio",
    },
    {
      id: 3,
      service: "datasources",
    },
    {
      id: 4,
      service: "flow-machine",
    },
    {
      id: 5,
      service: "micro-functions",
    },
    {
      id: 6,
      service: "gateway",
    },
    {
      id: 7,
      service: "file-storage",
    },
  ]);

  const [categories, setCategories] = useState([
    {
      id: 1,
      category: "application-manager",
    },
    {
      id: 2,
      category: "monitoring",
    },
    {
      id: 3,
      category: "console",
    },
  ]);

  return (
    <div className="navigation">
      <div className="allServices">
        <p>Tüm Hizmetler</p>
        <div className="tabs">
          {services.map((e) => (
            <NavigationTab key={e.id} tabName={e.service} />
          ))}
        </div>
      </div>
      <div className="categories">
        <p>Kategoriler</p>
        <div className="tabs">
          {categories.map((e) => (
            <NavigationTab key={e.id} tabName={e.category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
