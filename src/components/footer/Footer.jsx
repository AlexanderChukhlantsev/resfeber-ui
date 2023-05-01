import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItemUnic">Resfeber</li>
          <li className="fListItemUnic">Со шведского означает запутанные чувства страха и <br /> волнения перед началом путешествия.</li>
					<li className="fListItemUnic">Наш проект предназначен для того, чтобы <br /> туристы могли спокойно и безопастно узнавать и <br />изучать новое.</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Главная</li>
          <li className="fListItem">Места</li>
          <li className="fListItem">Информация</li>
          <li className="fListItem">Связаться с нами</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">О нас</li>
          <li className="fListItem">Новости</li>
          <li className="fListItem">Пресс центр</li>
          <li className="fListItem">Контакты</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Техподдержка</li>
          <li className="fListItem">Конфиденциальность</li>
					<li className="fListItem">Правовая информация</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 Resfeber.</div>
    </div>
  );
};

export default Footer;
