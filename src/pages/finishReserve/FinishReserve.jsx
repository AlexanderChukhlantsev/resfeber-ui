import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";
import "./finishReserve.css";

const FinishReserve = () => {
	const {user} = useContext(AuthContext);
	const navigate = useNavigate();
	const handleMainPage = () => {
    navigate(-1);
  };
	const location = useLocation();
	const fromPage = location.state?.from?.pathname || '/';
	return <div className="finishReserve">
		<div className="finResContainer">
			<div onClick={handleMainPage} className="finResLowerText">Вернуться обратно</div>
			<div className="finResMainText">
				<div className="finResMainTextItem">
					Спасибо вам <b>{user.username} </b>, что выбрали нас!
				</div>
				<div className="finResMainTextItem">
					С вами свяжутся, в ближайшее время, по указанной вами, при регистрации, электронной почте.
				</div>
			</div>
		</div>
	</div>;
};

export default FinishReserve;