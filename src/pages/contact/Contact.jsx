import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./contact.css";

const Contact = () => {
	return (
		<div>
		<Navbar />
		<Header type="list" />
			<div className="contactContainer">
				<div className="contactWrapper">
					<h1 className="contactTitle">Связаться с нами</h1>
					<div className="contactDetails">
						<div className="contactDetailsTexts">
							<div className="contactDetailsTextsItem">
								<h5>Для связи используйте:</h5>
							</div>
							<div className="contactDetailsTextsItem">
								<p>resfeber@gmail.com</p>
							</div>
							<div className="contactDetailsTextsItem">
								<a href="https://vk.com/resfeber.travel"
									target="_blank"
									rel = "noreferrer"
								>
									Сообщество Вконтакте
								</a>
							</div>
						</div>
					</div>
				</div>
				<MailList />
				<Footer />
			</div>
	</div>
	);
};

export default Contact;