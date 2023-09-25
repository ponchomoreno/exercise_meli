import "./ShowItemsFounded.css";

export const ShowItemsMeli = ({ itemsToShow, onClickItemId }) => {
  const printItemsToList = () => {
    if (itemsToShow && itemsToShow.items) {
      return itemsToShow.items.map((val, key) => (
        <div
          key={"itemList" + key}
          className="containerItemList"
          onClick={() => getIdItem(val.id)}
        >
          <div className="imageContainerItem">
            <img
              alt="imageItem"
              src={val.picture}
              width={"180px"}
              height={"180px"}
              className="imgItemShow"
            />
          </div>
          <div className="divItemInformation">
            <div className="divPriceAmountIcon">
              <span className="fontPriceNumber">
                $ {val.price.basePrice.toLocaleString("en-US")}
              </span>
              {val.free_shipping ? <i className="iconFreeShipping" /> : <></>}
            </div>
            <div className="divInformationProduct">
              <span className="spanInformationProduct">
                {val.title}
                <br />
                Completo unico!
              </span>
            </div>
          </div>
          <div className="divInformationLocation">
            <span className="spanStateInformation">{val.state}</span>
          </div>
        </div>
      ));
    }
  };

  const getIdItem = (idItem) => {
    onClickItemId(idItem);
  };

  return <div className="itemsFounded">{printItemsToList()}</div>;
};
