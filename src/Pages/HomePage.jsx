import React, { useState } from "react";
import "../Styles/HomePage.css";
import NotificationBar from "../Components/NotificationBar";
import Form from "../Components/Form.jsx";
import CurrentPath from "../Components/CurrentPath.jsx";

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-page--page-content">
        <CurrentPath />
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
