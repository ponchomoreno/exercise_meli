import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ShowItemsMeli } from "../baseComponents/ShowItemsFounded";
import { getItemById, cleanItemById } from "../foundedItems/actions";
import {
  getItemsFromSearchBox,
  setQueryParamsUrlSearch,
} from "../searchBox/actions";
import { getDecimalsFromNumber } from "../statics/getDecimalsFromNumber";
import { cleanProductDescription } from "../itemDetails/actions";
import { BreadCrumbsMeli } from "../baseComponents/breadCrumbs";
import Link from "@mui/material/Link";

import "./FoundItems.css";

const FoundItems = () => {
  const [itemsFoundedArray, setItemsFoundedArray] = useState({});
  const [idItemMeli, setIdItemMeli] = useState("");
  const [flagShowBreadCrumbs, setflagShowBreadCrumb] = useState(false);
  const [queryParams] = useSearchParams();

  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const storedItems = useSelector(
    (state) => state.searchBoxReducers.foundItems
  );

  useEffect(() => {
    dispatch(cleanItemById());
    dispatch(cleanProductDescription());
    const params = queryParams.get("search");
    dispatch(getItemsFromSearchBox(params));
    dispatch(setQueryParamsUrlSearch(params));
  }, []);

  useEffect(() => {
    if (idItemMeli !== "") {
      dispatch(getItemById(idItemMeli.trim())).then(() => {
        navigateTo({
          pathname: `/items/${idItemMeli}`,
        });
      });
    }
  }, [idItemMeli]);

  const getIdFromItemList = (id) => {
    setIdItemMeli(id);
  };

  useEffect(() => {
    if (storedItems && storedItems.length > 0) {
      let itemsArray = [];
      let itemsJson = {
        author: "Alfonso",
        lastname: "Moreno",
      };
      for (let val in storedItems) {
        const { priceAmount, priceDecimals } = getDecimalsFromNumber(
          storedItems[val].price
        );
        let items = {
          id: storedItems[val].id,
          title: storedItems[val].title,
          price: {
            currency: storedItems[val].currency_id,
            amount: parseInt(priceAmount),
            decimals: parseInt(priceDecimals),
            basePrice: storedItems[val].price,
          },
          picture: storedItems[val].thumbnail,
          condition: storedItems[val].condition,
          free_shipping: storedItems[val].shipping.free_shipping,
          state: storedItems[val].seller_address.state.name,
        };
        itemsArray.push(items);
      }
      itemsJson.items = itemsArray;
      setflagShowBreadCrumb(true);
      setItemsFoundedArray(itemsJson);
    }
  }, [storedItems]);

  return (
    <div className="containerItems">
      <div className="divBreadCrumbsFI">
        {flagShowBreadCrumbs ? (
          <BreadCrumbsMeli>
            <Link underline="hover" href="/">
              Home
            </Link>
            <Link underline="none">Items</Link>
          </BreadCrumbsMeli>
        ) : (
          <></>
        )}
      </div>
      <ShowItemsMeli
        itemsToShow={itemsFoundedArray}
        onClickItemId={getIdFromItemList}
      />
    </div>
  );
};

export default FoundItems;
