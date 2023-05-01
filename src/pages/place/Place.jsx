import "./place.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Place = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Kunstkamera_SPB.jpg/1024px-Kunstkamera_SPB.jpg",
    },
    {
      src: "https://d-neva.ru/upload/delight.webpconverter/upload/resize_cache/iblock/612/0_136_1/6126035ba7f4da742f44f1991d9e83b7.jpg.webp?166815218570714",
    },
    {
      src: "https://cdn.abnews.ru/storage/wp-content/uploads/2021/07/maska.png__0_0x0.jpg",
    },
    {
      src: "https://personaltours.ru/wp-content/uploads/2018/01/Kunstkamera_3.jpg",
    },
    {
      src: "https://goarctic.ru/upload/iblock/801/zxu17gsm9rlmtsiiijdleugdl2eav6yv.jpg",
    },
    {
      src: "https://countryscanner.ru/wp-content/uploads/2017/04/kunstkamera-countryscanner-11.jpg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="placeContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="placeWrapper">
          <button className="bookNow">Оформить экскурсию</button>
          <h1 className="placeTitle">Кунсткамера</h1>
          <div className="placeAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Университетская наб. 3, Санкт-Петербург</span>
          </div>
          <span className="placeDistance">
            Отличная локация – 2,7км от центра
          </span>
          {/* <span className="placePriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span> */}
          <div className="placeImages">
            {photos.map((photo, i) => (
              <div className="placeImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="placeImg"
                />
              </div>
            ))}
          </div>
          <div className="placeDetails">
            <div className="placeDetailsTexts">
              <h1 className="placeTitle">Кабинет редкостей</h1>
              <p className="placeDesc">
							Кунсткамера - это старейший музей России, основанный в 1714 году на базе личных коллекций Петра I, 
							приобретенных им во время путешествий в Западную Европу. 
							Первоначально они размещались в Летнем дворце Петра I, в специальном помещении, 
							названном «Кунсткамера», что переводится с немецкого как «кабинет редкостей».
              </p>
            </div>
            <div className="placeDetailsPrice">
              <h1>Идеально для любителей истории!</h1>
              <span>
									Расположен в самом центре Санкт-Петербурга, с отличной оценков в 4.4 балла.
              </span>
              <h2>
                <b>400 ₽</b>
              </h2>
              <button>Оформить экскурсию</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Place;
