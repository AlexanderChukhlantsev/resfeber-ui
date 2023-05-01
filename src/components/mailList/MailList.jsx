import "./mailList.css"

const MailList = () => {
  return (

    <div className="mail">
			<div className="mailContainer">
				<h1 className="mailTitle">Экономьте время, экономьте деньги!</h1>
				<span className="mailDesc">Подпишитесь и мы будем присылать вам лучшие предложения</span>
				<div className="mailInputContainer">
					<input type="text" placeholder="Ваша почта" />
					<button>Подписаться</button>
				</div>
			</div>
    </div>
  )
}

export default MailList