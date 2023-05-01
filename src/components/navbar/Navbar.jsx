import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.css";


const Navbar = () => {
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
        <div className="navItems">
          <button className="navButton">Регистрация</button>
          <button className="navButton">Логин</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar