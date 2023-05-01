import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./info.css";

const Info = () => {
  return (
    <div>
      <Navbar />
			<Header type="list" />
      <div className="infoContainer">
        <div className="infoWrapper">
          <h1 className="infoTitle">О проекте</h1>
          <div className="infoDetails">
            <div className="infoDetailsTexts">
              <h2 className="infoTitle">Resfeber</h2>
              <p className="infoDesc">
								Со шведского означает запутанные чувства страха и
								волнения перед началом путешествия.
								Наш проект предназначен для того, чтобы
								туристы могли спокойно и безопастно узнавать и
								изучать новое.
              </p>
							<p className="infoDesc">
							Resfeber - это прогрессивный туристический проект, цель которого - помочь туристам открыть для себя удивительные места в России. 
							Благодаря мощной функции поиска, 
							Resfeber облегчает путешественникам поиск идеального места назначения в зависимости от их предпочтений и интересов.
							</p>
							<p className="infoDesc">
							Если вы ищете захватывающие дух природные ландшафты, исторические достопримечательности или захватывающие культурные события, 
							Resfeber поможет вам. Благодаря обширной базе данных туристических достопримечательностей по всей 
							России вы сможете легко найти идеальное место для посещения, соответствующее вашим интересам и маршруту.
							</p>
							<p className="infoDesc">
							Resfeber разработан для обеспечения удобного пользования, интуитивно понятной навигации и быстрых, надежных результатов поиска. 
							Благодаря передовым технологиям и удобному интерфейсу Resfeber позволяет любому человеку легко спланировать свой идеальный отпуск в России.
							</p>
							<p className="infoDesc">
							Так зачем ждать? Начните исследовать красоту России уже сегодня с Resfeber - вашим надежным партнером в путешествиях.
							</p>
            </div>
            <div className="infoDetailsPrice">
              <img 
							src="https://img.freepik.com/free-vector/madrid-concept-illustration_114360-3443.jpg?w=826&t=st=1682929435~exp=1682930035~hmac=606401b275570e8d6093bc11b28531e12975c0231e24a49764513da83ed289fa" 
							alt="" 
							className="infoImg"
							/>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Info;