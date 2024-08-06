import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeaderOptions from "./HeaderOptions";
import UserInformationsBox from "./UserInformationsBox";
import "../Styles/Header.css";
import styled from "styled-components";
import { nameFormatter } from "../lib/generalFunctions";
import { addNewPageToPath } from "../features/pages/pagesSlice";

function Header() {
  const dispatch = useDispatch();

  const services = useSelector((state) => state.tabsReducer.services);
  const categories = useSelector((state) => state.tabsReducer.categories);

  const [searchResults, setSearchResults] = useState([]);

  const handleFilter = (value) => {
    setSearchResults(
      services
        .filter((e) =>
          nameFormatter(e.sectionName).toLowerCase().includes(value)
        )
        .concat(
          categories.filter((e) =>
            nameFormatter(e.sectionName).toLowerCase().includes(value)
          )
        )
    );
  };

  const handleAddToPath = (pageObj) => dispatch(addNewPageToPath(pageObj));

  return (
    <div className="header">
      <img
        className="header--glomil-logo"
        src="assets/glomil-logo.png"
        alt=""
      />
      <div className="header--searchbar-container">
        <svg
          className="header--search-icon"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
        >
          <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
        </svg>
        <input
          type="text"
          className="header--searchbar"
          placeholder="Kaynakları, hizmetleri ve belgeleri arayın"
          onChange={(e) => handleFilter(e.target.value)}
        />
        {searchResults.length > 0 &&
          searchResults.length < services.length + categories.length && (
            <SearchResults searchResults={searchResults}>
              {searchResults.map((tab) => (
                <Link
                  to={tab.sectionName}
                  onClick={() => handleAddToPath(tab)}
                  className="header--link"
                >
                  {nameFormatter(tab.sectionName)}
                </Link>
              ))}
            </SearchResults>
          )}
      </div>
      <HeaderOptions />
      <UserInformationsBox />
    </div>
  );
}

export default Header;

const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  bottom: -${({ searchResults }) => searchResults.length * 40}px;
  background-color: #fafbfc;
  left: 0;
  border-radius: 0 0 4px 4px;
  border: 1px solid var(--search-bar-container-color);
`;
