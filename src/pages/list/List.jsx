import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  // const [options, setOptions] = useState(location.state.options);
	const [min, setMin] = useState(undefined);
	const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `/places?city=${destination || "Москва"}&min=${min || 0 }&max=${max || 5000}`
  );

  const handleClick = () => {
    reFetch();
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Поиск</h1>
            <div className="lsItem">
              <label>Укажите место назначения</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Укажите даты</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Фильтры</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Мин. цена
                  </span>
                  <input type="number" 
									onChange={e => setMin(e.target.value)} 
									className="lsOptionInput" 
									/>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
										Макс. цена
                  </span>
                  <input type="number" 
									onChange={e => setMax(e.target.value)} 
									className="lsOptionInput" 
									/>
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Найти</button>
          </div>
          <div className="listResult">
						{loading ? "Загрузка, пожалуйста подождите" : <>
							{data.map(item => (
								<SearchItem item={item} key={item._id}/>	
							))}
						</>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
