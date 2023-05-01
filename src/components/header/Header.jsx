import { faInfoCircle, faMessage, faPerson, faPlaceOfWorship } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useState } from "react"
import {format} from "date-fns"
import { useNavigate } from "react-router-dom"

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
		human: 1
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearchPlacesPage = () => {
    navigate("/places", { state: { destination, date, options } });
  };

	const handleSearchMainPage = () => {
    navigate("/");
  };

	const handleSearchInfoPage = () => {
    navigate("/info");
  };

	const handleSearchContactPage = () => {
    navigate("/contact");
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem" onClick={handleSearchMainPage}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <span>Главная</span>
          </div>
          <div className="headerListItem" onClick={handleSearchPlacesPage}>
            <FontAwesomeIcon icon={faPlaceOfWorship} />
            <span>Места</span>
          </div>
          <div className="headerListItem" onClick={handleSearchInfoPage}>
            <FontAwesomeIcon icon={faInfoCircle} />
            <span>Информация</span>
          </div>
          <div className="headerListItem" onClick={handleSearchContactPage}>
            <FontAwesomeIcon icon={faMessage} />
            <span>Связаться с нами</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              Resfeber
            </h1>
            <p className="headerDesc">
              Помогаем быстро и удобно находить новые, неизведенные туристические места.<br/>
							Проходить экскурсии для того чтобы лучше познать историю.
            </p>
            <button className="headerBtn">Войдите или Зарегистрируйтесь</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPlaceOfWorship} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Укажите город"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.human} человек`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Человек</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.human <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("human", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.human}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("human", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearchPlacesPage}>
                  Найти
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
