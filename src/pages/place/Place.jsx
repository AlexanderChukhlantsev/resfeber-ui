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
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch.js";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";


const Place = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];
	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(false);

	const { data, loading, error} = useFetch(`/places/find/${id}`);

	const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

	const days = (dayDifference(dates[0].endDate, dates[0].startDate));

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
      {loading ? (
			"Загрузка, пожалуйста подождите"
			) : (
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
								<img src={data.photos[slideNumber]} alt="" className="sliderImg" />
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
						<h1 className="placeTitle">{data.name}</h1> 
						<div className="placeAddress">
							<FontAwesomeIcon icon={faLocationDot} />
							<span>{data.address} {data.city}</span>
						</div>
						<span className="placeDistance">
							Отличная локация – {data.distance} от центра
						</span>
						<div className="placeImages">
							{data.photos?.map((photo, i) => (
								<div className="placeImgWrapper" key={i}>
									<img
										onClick={() => handleOpen(i)}
										src={photo}
										alt=""
										className="placeImg"
									/>
								</div>
							))}
						</div>
						<div className="placeDetails">
							<div className="placeDetailsTexts">
								<h1 className="placeTitle">{data.title}</h1>
								<p className="placeDesc">{data.desc}</p>
							</div>
							<div className="placeDetailsPrice">
								<h1>Идеально для тех, кто хочет узнать новое!</h1>
								<span>
										Место расположено недалеко от центра, с отличной оценков в {data.rating} балла. <br />
										Цена экскурсия за {options.human} человек:
								</span>
								<h2>
									<b>{options.human * data.cheapestPrice} ₽</b>
								</h2>
								<button>Оформить экскурсию</button>
							</div>
						</div>
					</div>
					<MailList />
					<Footer />
				</div>
				) 
			}
    </div>
  );
};

export default Place;
