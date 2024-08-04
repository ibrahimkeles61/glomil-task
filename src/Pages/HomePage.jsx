import React, { useState } from "react";
import "../Styles/HomePage.css";
import NotificationBar from "../Components/NotificationBar";
import Form from "../Components/Form.jsx";
import {
  nameFormatter,
  currentPathFormatter,
} from "../lib/generalFunctions.js";

function HomePage() {
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

  const [currentPath, setCurrentPath] = useState([
    services[0],
    services[2],
    categories[0],
    services[6],
    categories[2],
  ]);

  return (
    <div className="home-page">
      <div className="home-page--page-content">
        <div className="home-page--current-path">
          {currentPathFormatter(currentPath).map((e, i) => {
            if (i == currentPath.length - 1)
              return <span key={e.id}>{nameFormatter(e.sectionName)}</span>;
            return `${nameFormatter(e.sectionName)} / `;
          })}
        </div>
        <NotificationBar />
        <p className="home-page--small-title">NG Apps Workflow</p>
        <p className="home-page--title">
          Visual workflow automation.Now with code.
        </p>
        <div className="home-page--title-statement">
          This is commonly used in the expressive type theme layouts for long
          paragraphs with more than four lines. The looser line height and
          larger size makes for comfortable, long-form reading, in mediums that
          allow for more space. This size type is rarely used for body copy in
          components. We always left-align type; we never center it.
        </div>
        <Form />
      </div>
    </div>
  );
}

export default HomePage;
