import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./reserve.css";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({setOpen, placeId}) => {
	const [selectedExcursions, setSelectedExcursions] = useState([]);
	const { data, loading, error } = useFetch(`/places/excursion/${placeId}`);
	const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    const dates = [];
    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };
  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

	const isAvailable = (excursionNumber) => {
    const isFound = excursionNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

	const handleSelect = (e) => {
		const checked = e.target.checked;
		const value = e.target.value;
		setSelectedExcursions(
			checked
				? [...selectedExcursions, value]
				: selectedExcursions.filter((item) => item !== value)
		);
	};
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedExcursions.map((excursionId) => {
          const res = axios.put(`/excursions/availability/${excursionId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/finishreserve");
    } catch (err) {}
  };
	return (
    <div className="reserve">
      <div className="resContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="resClose"
          onClick={() => setOpen(false)}
        />
        <span>Выберите экскурсию:</span>
        {data.map((item) => (
          <div className="resItem" key={item._id}>
            <div className="resItemInfo">
              <div className="resTitle">{item.title}</div>
              <div className="resDesc">{item.desc}</div>
              <div className="resMax">
                Максимум людей: <b>{item.maxPeople}</b>
              </div>
              <div className="resPrice">Цена за 1 чел: {item.price} ₽</div>
            </div>
            <div className="resSelectExcursion">
              {item.excursionNumbers.map((excursionNumber) => (
                <div className="excursion">
                  <label>{excursionNumber.number}</label>
                  <input
                    type="checkbox"
                    value={excursionNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(excursionNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="resButton">
          Оформить заявку на экскурсию!
        </button>
      </div>
    </div>
	)
}

export default Reserve;