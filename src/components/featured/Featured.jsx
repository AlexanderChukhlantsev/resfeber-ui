import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://avatars.dzeninfra.ru/get-zen_doc/5128156/pub_638745d06e707404f4189d93_638cfb70e47a384c6075de4f/scale_1200"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Санкт-Петербург</h1>
          <h2>15 тур. мест</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://planetofhotels.com/sites/default/files/hram_hrista_spasitelya-5.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Москва</h1>
          <h2>15 тур. мест</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://kazan-kremlin.ru/wp-content/uploads/news/3-1150x813.png"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Казань</h1>
          <h2>15 тур. мест</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
