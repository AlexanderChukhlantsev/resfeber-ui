import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
	const { data, loading, error } = useFetch("/places/countByType");

  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://www.spbmuzei.ru/wp-content/uploads/2021/02/ermitag1.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Государственный Эрмитаж</span>
        <span className="fpCity">Санкт-Петербург</span>
        <span className="fpPrice">500 ₽</span>
        <div className="fpRating">
          <button>4.8</button>
          <span>Превосходно</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://architectureguru.ru/wp-content/uploads/2019/11/palace-square-in-st-petersburg-1.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Дворцовая площадь</span>
        <span className="fpCity">Санкт-Петербург</span>
        <span className="fpPrice">Бесплатно</span>
        <div className="fpRating">
          <button>4.9</button>
          <span>Превосходно</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://avatars.dzeninfra.ru/get-zen_doc/8170504/pub_64195f3b3d1e83632eea5021_641960f06348b973b9782247/scale_1200"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Московский Кремль</span>
        <span className="fpCity">Москва</span>
        <span className="fpPrice">350 ₽</span>
        <div className="fpRating">
          <button>4.8</button>
          <span>Превосходно</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://avatars.mds.yandex.net/get-altay/2383444/2a00000174ff2ecda3fbaf5c67a8001d5714/XXL_height"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Родина-мать зовёт</span>
        <span className="fpCity">Волгоград</span>
        <span className="fpPrice">Бесплатно</span>
        <div className="fpRating">
          <button>4.9</button>
          <span>Превосходно</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
