import React, { useEffect, useState } from "react";
import "../Styles/Navigation.css";
import styled from "styled-components";

import NavigationTab from "./NavigationTab";
import Triangle from "./Triangle";

function Navigation() {
  const [wrapNavigation, setWrapNavigation] = useState(true);

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

  const moveUpHandler = () => setWrapNavigation(true);

  const moveDownHandler = () => setWrapNavigation(false);

  return (
    <NavigationContainer wrapNavigation={wrapNavigation}>
      <div
        className="navigation--move-buttons navigation--up-button"
        onClick={moveUpHandler}
      >
        <Triangle
          styles={`
          width:30px;
          height:15px;
          transform:rotate(180deg);
          `}
        />
      </div>
      <div className="navigation--allServices">
        <p>Tüm Hizmetler</p>
        <div className="navigation--tabs">
          {services.map((e) => (
            <NavigationTab key={e.id} tabName={e.sectionName} />
          ))}
        </div>
      </div>
      <div className="navigation--categories">
        <p>Kategoriler</p>
        <div className="navigation--tabs">
          {categories.map((e) => (
            <NavigationTab key={e.id} tabName={e.sectionName} />
          ))}
        </div>
      </div>
      <div
        className="navigation--move-buttons navigation--down-button"
        onClick={moveDownHandler}
      >
        <Triangle
          styles={`
          width:30px;
          height:15px;
          `}
        />
      </div>
    </NavigationContainer>
  );
}

export default Navigation;

const NavigationContainer = styled.div`
  width: 271px;
  height: calc(var(--app-height) - 104px);
  background: var(---f9f9f9-grey50) 0% 0% no-repeat padding-box;
  opacity: 1;
  z-index: 50;
  transition: transform 0.3s ease;

  p {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-20) var(--unnamed-font-family-inter);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--primary-262626);
    text-align: left;
    /* font: normal normal bold 14px/20px Inter;
  letter-spacing: 0px;
  opacity: 1; */
    display: inline;
    margin-left: 30px;
  }

  // display: flex;
  // flex-direction: column;

  @media screen and (max-width: 1918px) {
    width: 250px;
    height: 90vh;
  }

  @media screen and (max-width: 1536px) {
    width: 230px;
  }

  @media screen and (max-width: 1280px) {
    width: 210px;
    transform: ${({ wrapNavigation }) =>
      wrapNavigation ? "translateY(calc(40px - 90vh))" : "0"};
    position: absolute;
    top: 10vh;
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 640px) {
  }
`;
