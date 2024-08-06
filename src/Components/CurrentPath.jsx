import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { slicePath } from "../features/pages/pagesSlice";
import { currentPathFormatter, nameFormatter } from "../lib/generalFunctions";

function CurrentPath() {
  const dispatch = useDispatch();

  const currentPath = useSelector((state) => state.pagesReducer.currentPath);

  const handleSlicePath = (pageObj) => dispatch(slicePath(pageObj));

  return (
    <CurrentPathContainer>
      {currentPathFormatter(currentPath).map((tab, i) => {
        return (
          <Link
            key={tab.id}
            to={`/${tab.sectionName}`}
            style={{ textDecoration: "none" }}
            onClick={() => handleSlicePath(tab)}
          >
            {i == currentPath.length - 1 ? (
              <span>{nameFormatter(tab.sectionName)}</span>
            ) : (
              <span className="light">{nameFormatter(tab.sectionName)} / </span>
            )}
          </Link>
        );
      })}
    </CurrentPathContainer>
  );
}

export default CurrentPath;

const CurrentPathContainer = styled.div`
  span.light {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-20) var(--unnamed-font-family-inter);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--disabled);
    text-align: left;
    font: normal normal normal 14px/20px Inter;
    letter-spacing: 0px;
    color: #979797;
    opacity: 1;
  }

  span {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-20) var(--unnamed-font-family-inter);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--primary-262626);
    text-align: left;
    font: normal normal bold 14px/20px Inter;
    letter-spacing: 0px;
    opacity: 1;
  }
`;
