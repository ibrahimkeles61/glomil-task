import React from "react";
import styled from "styled-components";

function Triangle({ isOptionsOpen, styles }) {
  return (
    <Main isOptionsOpen={isOptionsOpen} styles={styles}>
      <LeftPart />
      <RightPart />
    </Main>
  );
}

export default Triangle;

const Main = styled.div`
  width: 12px;
  height: 6px;
  display: flex;
  transform: ${({ isOptionsOpen }) =>
    isOptionsOpen ? "rotate(180deg)" : "none"};
  ${({ styles }) => styles}
`;

const LeftPart = styled.div`
  width: 50%;
  height: 100%;
  background-image: linear-gradient(to left bottom, #000 50%, transparent 50%);
`;

const RightPart = styled.div`
  width: 50%;
  height: 100%;
  background-image: linear-gradient(to right bottom, #000 50%, transparent 50%);
`;
