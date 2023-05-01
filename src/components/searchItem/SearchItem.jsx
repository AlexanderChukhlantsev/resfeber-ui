import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://www.rewizor.ru/files/40595xpuc.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Кунсткамера</h1>
        <span className="siDistance">2,7 км от центра</span>
        {/* <span className="siTaxiOp">Free airport taxi</span> */}
        <span className="siSubtitle">
					Музей
        </span>
        <span className="siFeatures">
					Старейший музей России, основанный в 1714 году на базе личных коллекций Петра I.
        </span>
        {/* <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span> */}
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Отлично</span>
          <button>4.4</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">400 ₽</span>
          {/* <span className="siTaxOp">Includes taxes and fees</span> */}
          <button className="siCheckButton">Подробнее</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
