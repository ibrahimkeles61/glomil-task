import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import "../Styles/HeaderOptions.css";
import { changeIsHeaderOptionsOpen } from "../features/conditions/conditionsSlice";

function HeaderOptions() {
  const dispatch = useDispatch();

  const isHeaderOptionsOpen = useSelector(
    (state) => state.conditionsReducer.isHeaderOptionsOpen
  );

  const headerOptionsVisibilityToggle = () =>
    dispatch(changeIsHeaderOptionsOpen(!isHeaderOptionsOpen));

  return (
    <HeaderOptionsContainer onClick={headerOptionsVisibilityToggle}>
      <HeaderOptionsToggleButton isHeaderOptionsOpen={isHeaderOptionsOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 30 30"
        >
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
        </svg>
      </HeaderOptionsToggleButton>
      <HeaderOptionsWrapper isHeaderOptionsOpen={isHeaderOptionsOpen}>
        <HeaderOptionsOption
          index={1}
          isHeaderOptionsOpen={isHeaderOptionsOpen}
        >
          {/* files */}
          <svg
            className="header-options--option"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 128 128"
          >
            <path d="M 33.5 9 C 26.3 9 20.5 14.8 20.5 22 L 20.5 102 C 20.5 109.2 26.3 115 33.5 115 L 94.5 115 C 101.7 115 107.5 109.2 107.5 102 L 107.5 22 C 107.5 14.8 101.7 9 94.5 9 L 33.5 9 z M 33.5 15 L 94.5 15 C 98.4 15 101.5 18.1 101.5 22 L 101.5 102 C 101.5 105.9 98.4 109 94.5 109 L 33.5 109 C 29.6 109 26.5 105.9 26.5 102 L 26.5 22 C 26.5 18.1 29.6 15 33.5 15 z M 33.5 22 L 33.5 37 L 94.5 37 L 94.5 22 L 33.5 22 z M 37.5 51 C 35.8 51 34.5 52.3 34.5 54 C 34.5 55.7 35.8 57 37.5 57 L 88.5 57 C 90.2 57 91.5 55.7 91.5 54 C 91.5 52.3 90.2 51 88.5 51 L 37.5 51 z M 37.5 66 C 35.8 66 34.5 67.3 34.5 69 C 34.5 70.7 35.8 72 37.5 72 L 88.5 72 C 90.2 72 91.5 70.7 91.5 69 C 91.5 67.3 90.2 66 88.5 66 L 37.5 66 z M 37.5 81 C 35.8 81 34.5 82.3 34.5 84 C 34.5 85.7 35.8 87 37.5 87 L 64 87 C 65.7 87 67 85.7 67 84 C 67 82.3 65.7 81 64 81 L 37.5 81 z"></path>
          </svg>
        </HeaderOptionsOption>

        <HeaderOptionsOption
          index={2}
          isHeaderOptionsOpen={isHeaderOptionsOpen}
        >
          {/* bell */}
          <svg
            className="header-options--option header-options--bell"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 24 24"
          >
            <path d="M 12 2 C 11.172 2 10.5 2.672 10.5 3.5 L 10.5 4.1953125 C 7.9131836 4.862095 6 7.2048001 6 10 L 6 16 L 4 18 L 4 19 L 10.269531 19 A 2 2 0 0 0 10 20 A 2 2 0 0 0 12 22 A 2 2 0 0 0 14 20 A 2 2 0 0 0 13.728516 19 L 20 19 L 20 18 L 18 16 L 18 10 C 18 7.2048001 16.086816 4.862095 13.5 4.1953125 L 13.5 3.5 C 13.5 2.672 12.828 2 12 2 z M 12 6 C 14.206 6 16 7.794 16 10 L 16 16 L 16 16.828125 L 16.171875 17 L 7.828125 17 L 8 16.828125 L 8 16 L 8 10 C 8 7.794 9.794 6 12 6 z"></path>
          </svg>
        </HeaderOptionsOption>

        <HeaderOptionsOption
          index={3}
          isHeaderOptionsOpen={isHeaderOptionsOpen}
        >
          {/* settings */}
          <svg
            className="header-options--option header-options--settings"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 64 64"
          >
            <path d="M 29.054688 10 C 27.715688 10 26.571703 10.964203 26.345703 12.283203 L 25.763672 15.664062 C 25.457672 15.781062 25.152469 15.902156 24.855469 16.035156 L 22.058594 14.058594 C 20.830594 13.209594 19.383344 13.520328 18.527344 14.361328 L 14.361328 18.525391 C 13.414328 19.472391 13.288547 20.962641 14.060547 22.056641 L 16.035156 24.855469 C 15.901156 25.152469 15.781063 25.455719 15.664062 25.761719 L 12.283203 26.34375 C 10.963203 26.57075 10 27.715688 10 29.054688 L 10 34.945312 C 10 36.284312 10.964203 37.428297 12.283203 37.654297 L 15.664062 38.236328 C 15.781062 38.542328 15.902156 38.847531 16.035156 39.144531 L 14.058594 41.941406 C 13.286594 43.034406 13.414328 44.525656 14.361328 45.472656 L 18.525391 49.638672 C 19.609391 50.698672 21.124641 50.614453 22.056641 49.939453 L 24.855469 47.964844 C 25.152469 48.098844 25.455719 48.218938 25.761719 48.335938 L 26.34375 51.716797 C 26.57075 53.036797 27.715688 54 29.054688 54 L 34.945312 54 C 36.284312 54 37.428297 53.035797 37.654297 51.716797 L 38.236328 48.335938 C 38.542328 48.218937 38.847531 48.097844 39.144531 47.964844 L 41.941406 49.941406 C 42.766406 50.549406 44.343656 50.768672 45.472656 49.638672 L 49.638672 45.474609 C 50.585672 44.527609 50.711453 43.037359 49.939453 41.943359 L 47.964844 39.144531 C 48.098844 38.847531 48.218938 38.544281 48.335938 38.238281 L 51.716797 37.65625 C 53.036797 37.42925 54 36.284312 54 34.945312 L 54 29.054688 C 54 27.715688 53.035797 26.571703 51.716797 26.345703 L 48.335938 25.763672 C 48.218937 25.457672 48.097844 25.152469 47.964844 24.855469 L 49.941406 22.058594 C 50.713406 20.965594 50.585672 19.474344 49.638672 18.527344 L 45.474609 14.361328 C 44.417609 13.329328 42.952359 13.351547 41.943359 14.060547 L 39.144531 16.035156 C 38.847531 15.901156 38.544281 15.781063 38.238281 15.664062 L 37.65625 12.283203 C 37.42925 10.963203 36.284312 10 34.945312 10 L 29.054688 10 z M 30.214844 14 L 33.787109 14 C 33.848109 14 33.900156 14.043516 33.910156 14.103516 L 34.681641 18.589844 C 36.449641 19.224844 38.104844 19.894141 39.589844 20.619141 L 43.302734 17.996094 C 43.352734 17.961094 43.421844 17.966766 43.464844 18.009766 L 45.990234 20.537109 C 46.033234 20.580109 46.040859 20.647266 46.005859 20.697266 L 43.380859 24.412109 C 44.139859 26.017109 44.824156 27.649359 45.410156 29.318359 L 49.896484 30.091797 C 49.956484 30.101797 50 30.153844 50 30.214844 L 50 33.787109 C 50 33.848109 49.955531 33.900156 49.894531 33.910156 L 45.410156 34.681641 C 44.825156 36.350641 44.148859 37.985844 43.380859 39.589844 L 46.005859 43.304688 C 46.040859 43.354688 46.033234 43.421844 45.990234 43.464844 L 43.464844 45.992188 C 43.421844 46.035187 43.352734 46.040859 43.302734 46.005859 L 39.589844 43.382812 C 37.949844 44.153812 36.313641 44.829109 34.681641 45.412109 L 33.908203 49.896484 C 33.898203 49.956484 33.846156 50 33.785156 50 L 30.212891 50 C 30.151891 50 30.099844 49.955531 30.089844 49.894531 L 29.318359 45.410156 C 27.709359 44.851156 26.075156 44.184859 24.410156 43.380859 L 20.695312 46.005859 C 20.645312 46.040859 20.578156 46.033234 20.535156 45.990234 L 18.007812 43.464844 C 17.964813 43.421844 17.959141 43.352734 17.994141 43.302734 L 20.617188 39.589844 C 19.838187 37.924844 19.161891 36.288641 18.587891 34.681641 L 14.103516 33.908203 C 14.043516 33.898203 14 33.846156 14 33.785156 L 14 30.212891 C 14 30.151891 14.043516 30.100844 14.103516 30.089844 L 18.589844 29.316406 C 19.170844 27.680406 19.837141 26.045156 20.619141 24.410156 L 17.994141 20.695312 C 17.959141 20.645312 17.966766 20.578156 18.009766 20.535156 L 20.535156 18.007812 C 20.578156 17.964813 20.647266 17.959141 20.697266 17.994141 L 24.410156 20.617188 C 25.958156 19.874187 27.599359 19.201891 29.318359 18.587891 L 30.091797 14.103516 C 30.101797 14.043516 30.153844 14 30.214844 14 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z M 32 27 C 34.761 27 37 29.239 37 32 C 37 34.761 34.761 37 32 37 C 29.239 37 27 34.761 27 32 C 27 29.239 29.239 27 32 27 z"></path>
          </svg>
        </HeaderOptionsOption>

        <HeaderOptionsOption
          index={4}
          isHeaderOptionsOpen={isHeaderOptionsOpen}
        >
          {/* information */}
          <svg
            className="header-options--option header-options--information"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="70"
            height="70"
            viewBox="0 0 50 50"
          >
            <path d="M25,2C12.297,2,2,12.297,2,25s10.297,23,23,23s23-10.297,23-23S37.703,2,25,2z M25,11c1.657,0,3,1.343,3,3s-1.343,3-3,3 s-3-1.343-3-3S23.343,11,25,11z M29,38h-2h-4h-2v-2h2V23h-2v-2h2h4v2v13h2V38z"></path>
          </svg>
        </HeaderOptionsOption>
      </HeaderOptionsWrapper>
    </HeaderOptionsContainer>
  );
}

export default HeaderOptions;

const HeaderOptionsContainer = styled.div`
  width: 150px;
  height: 40px;
  // position: absolute;
  // right: 280px;
  margin-left: 300px;
  z-index: 10;

  @media screen and (max-width: 1918px) {
    margin-left: 0px;
  }

  @media screen and (max-width: 1536px) {
  }

  @media screen and (max-width: 1280px) {
    // right: 100px;
  }

  @media screen and (max-width: 1024px) {
    width: 50px;
    height: 50px;
    position: relative;
  }

  @media screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
  }

  @media screen and (max-width: 640px) {
    margin-right: 20px;
  }
`;

const HeaderOptionsToggleButton = styled.div`
  display: none;
  // top: -50px;

  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: var(--white);
  border-radius: 10px;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
  }
`;

const HeaderOptionsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1024px) {
    ${
      ({ isHeaderOptionsOpen }) => {}
      // isHeaderOptionsOpen ? "visibility:visible" : "visibility:hidden"
    };
    position: absolute;
    top: -10px;
    z-index: -10;

    // width: 50px;
    // height: 200px;

    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    width: 35px;
    top: -15px;
  }
`;

const HeaderOptionsOption = styled.div`
  width: auto;
  height: 22px;

  @media screen and (max-width: 1024px) {
    position: absolute;
    top: 25px;
    transition: transform 0.3s ease;
    ${({ isHeaderOptionsOpen, index }) => {
      if (isHeaderOptionsOpen && index == 1) {
        return `
      transform: translateX(-50px) translateY(20px);
      transition-delay: calc(35ms * ${index});
      `;
      }
    }};

    ${({ isHeaderOptionsOpen, index }) => {
      if (isHeaderOptionsOpen && index == 2) {
        return `
      transform: translateX(-17px) translateY(40px);
      transition-delay: calc(35ms * ${index});
      `;
      }
    }};

    ${({ isHeaderOptionsOpen, index }) => {
      if (isHeaderOptionsOpen && index == 3) {
        return `
      transform: translateX(17px) translateY(40px);
      transition-delay: calc(35ms * ${index});
      `;
      }
    }};

    ${({ isHeaderOptionsOpen, index }) => {
      if (isHeaderOptionsOpen && index == 4) {
        return `
      transform: translateX(50px) translateY(20px);
      transition-delay: calc(35ms * ${index});
      `;
      }
    }};
  }
`;
