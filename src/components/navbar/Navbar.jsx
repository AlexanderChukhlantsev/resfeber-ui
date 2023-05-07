import { faEarthEurope, faRightFromBracket, faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.js";
import "./navbar.css";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
	const {user, dispatch} = useContext(AuthContext);
	const handleClick = async e => {
		e.preventDefault()
		dispatch({type: "LOGOUT"});
	};
	const navigate = useNavigate();
	const handleLoginPage = () => {
    navigate("/login");
  };
	const handleRegistrationPage = () => {
    navigate("/register");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
				<div className="logo">
					<div className="logoItem">
						<FontAwesomeIcon icon={faEarthEurope}/>
					</div>
					<div className="logoItem">
						Resfeber
					</div>
				</div>
        {user ? 
				(
					<div className="userBar">
						<div className="userBarItem"><FontAwesomeIcon icon={faUserLarge}/></div>
						<div className="userBarItem">{user.username}</div>
						<div onClick={handleClick} className="userBarItem"><FontAwesomeIcon icon={faRightFromBracket}/></div>
					</div>
				) : (
					<div className="navItems">
						<button onClick={handleRegistrationPage} className="navButton">Регистрация</button>
						<button onClick={handleLoginPage} className="navButton">Логин</button>
					</div>
				)}
      </div>
    </div>
  )
}

export default Navbar