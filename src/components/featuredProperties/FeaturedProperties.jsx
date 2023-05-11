import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import "./featuredProperties.css";

const FeaturedProperties = () => {
	const { data, loading, error } = useFetch("/places?featured=true&limit=4");

  return (
    <div className="fp">
			{loading ? "Загрузка, пожалуйста подождите" : <>
				{ data.map(item => (
				// <Link to={`/places/${item._id}`}>
					<div className="fpItem" key={item._id}>
						<img
							src={item.photos[0]}
							alt=""
							className="fpImg"
						/>
						<span className="fpName">{item.name}</span>
						<span className="fpCity">{item.city}</span>
						<span className="fpPrice">Экскурсия: {item.cheapestPrice} ₽</span>
						{item.rating && <div className="fpRating">
							<button>{item.rating}</button>
							<span>{item.ratingDesc}</span>
						</div>}
					</div>
				// </Link>
				))}
			</>}
    </div>
  );
};

export default FeaturedProperties;
