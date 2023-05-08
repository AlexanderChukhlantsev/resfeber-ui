import "./footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate();
	const handleLoginPage = () => {
    navigate("/login");
  };
	const handleRegistrationPage = () => {
    navigate("/register");
  };
	const handleMainPage = () => {
    navigate("/");
  };
	const handleInfoPage = () => {
    navigate("/info");
  };
	const handleContactPage = () => {
    navigate("/contact");
  };

  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItemUnic">Resfeber</li>
          <li className="fListItemUnic">Со шведского означает запутанные чувства страха и <br /> волнения перед началом путешествия.</li>
					<li className="fListItemUnic">Наш проект предназначен для того, чтобы <br /> туристы могли спокойно и безопастно узнавать и <br />изучать новое.</li>
        </ul>
        <ul className="fList">
          <li onClick={handleMainPage} className="fListItem">Главная</li>
          <li onClick={handleInfoPage} className="fListItem">Информация</li>
          <li onClick={handleContactPage} className="fListItem">Связаться с нами</li>
        </ul>
        <ul className="fList">
          <li onClick={handleInfoPage} className="fListItem">О нас</li>
          <li className="fListItem">Новости</li>
          <li className="fListItem">Пресс центр</li>
          <li onClick={handleContactPage} className="fListItem">Контакты</li>
        </ul>
        <ul className="fList">
          <li onClick={handleLoginPage} className="fListItem">Авторизация</li>
          <li onClick={handleRegistrationPage} className="fListItem">Регистрация</li>
					<li className="fListItem">Правовая информация</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 Resfeber.</div>
    </div>
  );
};

export default Footer;
