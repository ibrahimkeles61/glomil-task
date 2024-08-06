import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import "../Styles/Navigation.css";
import { changeWrapNavigation } from "../features/conditions/conditionsSlice";

import NavigationTab from "./NavigationTab";
import Triangle from "./Triangle";

function Navigation() {
  const dispatch = useDispatch();

  const wrapNavigation = useSelector(
    (state) => state.conditionsReducer.wrapNavigation
  );

  const services = useSelector((state) => state.tabsReducer.services);
  const categories = useSelector((state) => state.tabsReducer.categories);

  const moveUpHandler = () => dispatch(changeWrapNavigation(true));

  const moveDownHandler = () => dispatch(changeWrapNavigation(false));

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
            <NavigationTab key={e.id} tab={e} />
          ))}
        </div>
      </div>
      <div className="navigation--categories">
        <p>Kategoriler</p>
        <div className="navigation--tabs">
          {categories.map((e) => (
            <NavigationTab key={e.id} tab={e} />
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
