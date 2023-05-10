import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegContext } from "../../context/RegContext.js";
import "./registration.css";
import axios from "axios";

const Registration = () => {
	const [credentials, setCredentials] = useState({
		username: undefined,
		email: undefined,
		password: undefined,
	});

	const {status, loading, error, dispatch} = useContext(RegContext);
	const navigate = useNavigate()
	const handleChange = (e) => {
		setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const handleLoginPage = () => {
    navigate("/login");
  };
	const handleMainPage = () => {
    navigate("/");
  };

	const handleClick = async e => {
		e.preventDefault()
		dispatch({type: "REG_START"});
		try {
			const res = await axios.post("auth/register", credentials);
			dispatch({ type: "REG_SUCCESS", payload: res.data });
			navigate("/");
		} catch (err) {
			dispatch({ type: "REG_FAILURE", payload: err.response.data });
		}
	};

	return <div className="reg">
		<div className="rContainer">
			<div onClick={handleMainPage} className="rLowerText">Вернуться на главную</div>
			<div className="rLowerTextTwo">Введите имя пользователя</div>
			<input 
				type="text" 
				placeholder="имя пользователя" 
				id="username" 
				onChange={handleChange} 
				className="rInput" 
			/>
			<div className="rLowerTextTwo">Введите email</div>
			<input 
				type="email" 
				placeholder="email" 
				id="email" 
				onChange={handleChange} 
				className="rInput" 
			/>
			<div className="rLowerTextTwo">Введите пароль</div>
			<input
				type="password" 
				placeholder="пароль" 
				id="password" 
				onChange={handleChange} 
				className="rInput" 
			/>
			<div className="rLowerTextTwo">Укажите страну проживания</div>
			<input 
				type="text" 
				placeholder="страна" 
				id="country" 
				onChange={handleChange} 
				className="rInput" 
			/>
			<div className="rLowerTextTwo">Укажите город проживания</div>
			<input 
				type="text" 
				placeholder="город" 
				id="city" 
				onChange={handleChange} 
				className="rInput" 
			/>
			<div className="rLowerTextTwo">Введите номер телефона</div>
			<input 
				type="text" 
				placeholder="телефон" 
				id="phone" 
				onChange={handleChange} 
				className="rInput" 
			/>
			<button disabled={loading} onClick={handleClick} className="rButton">Зарегистрироваться</button>
			<div onClick={handleLoginPage} className="rLowerText">Уже есть аккунт? Авторизуйтесь</div>
			{error && <div className="rErrMessage">{error.message}</div>}
			{status && <div className="rErrMessage">{status}</div>}
		</div>
	</div>;
};

export default Registration;