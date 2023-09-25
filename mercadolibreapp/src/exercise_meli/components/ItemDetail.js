import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDecimalsFromNumber } from "../statics/getDecimalsFromNumber";
import { getProductDescriptionMeli } from "../itemDetails/actions";
import { BreadCrumbsMeli } from "../baseComponents/breadCrumbs";
import Link from "@mui/material/Link";

import "./ItemDetail.css";

const ItemDetail = () => {
  const [productDetailMeli, setProductItemDetailMeli] = useState({});
  const [flagProductDescription, setFlagProductDescription] = useState(false);

  const dispatch = useDispatch();
  const itemById = useSelector(
    (state) => state.foundedItemsReducers.itemMeliToShow
  );
  const productItemDescription = useSelector(
    (state) => state.itemDetailReducers.productDescription
  );

  const queryParamValue = useSelector(
    (state) => state.searchBoxReducers.queryParamsValue
  );

  useEffect(() => {
    if (Object.keys(itemById).length > 0) {
      dispatch(getProductDescriptionMeli(itemById.id));
      const { priceAmount, priceDecimals } = getDecimalsFromNumber(
        itemById.price
      );
      let productItem = {
        author: {
          name: "Alfonso",
          lastname: "Moreno",
        },
        item: {
          id: itemById.id,
          title: itemById.title,
          price: {
            currency: itemById.currency_id,
            amount: parseInt(priceAmount),
            decimals: parseInt(priceDecimals),
            basePrice: itemById.price,
          },
          picture: itemById.pictures.length > 0 ? itemById.pictures[0].url : "",
          condition: itemById.condition,
          free_shipping: itemById.shipping.free_shipping,
          sold_quantity: itemById.sold_quantity,
        },
      };
      setProductItemDetailMeli(productItem);
    }
  }, [itemById]);

  useEffect(() => {
    if (Object.keys(productItemDescription).length > 0) {
      let itemObject = { ...productDetailMeli };
      itemObject.item.description = productItemDescription.plain_text;
      setProductItemDetailMeli(itemObject);
    }
  }, [productItemDescription]);

  useEffect(() => {
    console.log(queryParamValue);
  }, [queryParamValue])

  const showProductDetail = () => {
    if (Object.keys(productDetailMeli).length > 0) {
      return (
        <div className="divContainerProductDetail">
          <div id="productDetailMeli" className="divProductDetail">
            <div className="divImageProduct">
              <img
                className="imageProductMeli"
                src={productDetailMeli.item.picture}
                alt="productImage"
              />
            </div>
            <div className="divDetailProduct">
              <div className="divChildDetailProduct">
                <div className="divConditionProduct">
                  {productDetailMeli.item.condition} -{" "}
                  {productDetailMeli.item.sold_quantity} vendidos
                </div>
                <div className="divTitleProduct">
                  {productDetailMeli.item.title}
                </div>
                <div className="divProductPrice">
                  ${" "}
                  {productDetailMeli.item.price.basePrice.toLocaleString(
                    "en-US"
                  )}
                </div>
                <div className="divButtonComprar">
                  <button className="buttonComprar">Comprar</button>
                </div>
              </div>
            </div>
          </div>
          <div id="productDescriptionMeli" className="divDescripcionProduct">
            <div style={{ marginLeft: "2rem" }}>
              <span className="divSpanTitleDescription">
                Descripcion del producto
              </span>
            </div>
            <div
              style={{
                marginLeft: "2rem",
                marginTop: "32px",
                marginBottom: "1rem",
              }}
            >
              <span className="divSpanProductDescription">
                {productDetailMeli.item.description}
              </span>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="containerItemsDetail">
      <div className="divBreadCrumbsItemDetail">
        <BreadCrumbsMeli>
          <Link underline="hover" href="/">
            Home
          </Link>
          <Link underline="hover" href={`/items?search=${queryParamValue}`}>
            Items
          </Link>
          <Link underline="none">Item detail</Link>
        </BreadCrumbsMeli>
      </div>
      {showProductDetail()}
    </div>
  );
};

export default ItemDetail;
