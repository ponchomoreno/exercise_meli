import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getItemsFromSearchBox,
  cleanItemsStored,
  setQueryParamsUrlSearch,
} from "../searchBox/actions";
import "./SearchBox.css";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const [queryParamsSearch] = useSearchParams();

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  useEffect(() => {
    dispatch(cleanItemsStored());
    const params = queryParamsSearch.get("search");
    setSearchText(params);
  }, []);

  const onChangeSearInput = ({ target: { value } }) => {
    setSearchText(value);
  };

  const onClickIconSearch = () => {
    searchItemMeli();
  };

  const keyPressSearchItem = (event) => {
    if (event.key === "Enter") {
      searchItemMeli();
    }
  };

  const searchItemMeli = () => {
    dispatch(getItemsFromSearchBox(searchText)).then(() => {
      dispatch(setQueryParamsUrlSearch(searchText));
      navigateTo({
        pathname: "/items",
        search: `?search=${searchText}`,
      });
    });
  };

  return (
    <div id="searhAppContainer" className="containerSearch">
      <i id="iconAppBarMeli" className="iconMeli" />
      <div id="containerInputIconSearch" className="containerInputSearchItem">
        <input
          id="inputSearchMeli"
          className="inputSearchItem"
          placeholder="Nunca dejes de buscar"
          value={searchText}
          name="searchText"
          onChange={onChangeSearInput}
          type="text"
          onKeyPress={keyPressSearchItem}
        />
        <div id="containerIconSearhItems" className="containerIconSearch">
          <i
            id="iconSearchInput"
            className="iconSearch"
            onClick={onClickIconSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
