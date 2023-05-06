import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img
        src={item.photos[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance} от центра</span>
        <span className="siSubtitle">
					{item.type}
        </span>
        <span className="siFeatures">
					{item.desc}
        </span>
      </div>
      <div className="siDetails">
				{item.rating && <div className="siRating">
          <span>{item.ratingDesc}</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">Экскурсия {item.cheapestPrice} ₽</span>
					<Link to={`/places/${item._id}`}>
          <button className="siCheckButton">Подробнее</button>
					</Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
