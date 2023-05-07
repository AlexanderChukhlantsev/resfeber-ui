import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";
import "./login.css";
import axios from "axios";

const Login = () => {
	const [credentials, setCredentials] = useState({
		username: undefined,
		password: undefined,
	});

	const {loading, error, dispatch} = useContext(AuthContext);
	const navigate = useNavigate()
	const handleChange = (e) => {
		setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const handleRegistrationPage = () => {
    navigate("/register");
  };
	const handleMainPage = () => {
    navigate("/");
  };

	const handleClick = async e => {
		e.preventDefault()
		dispatch({type: "LOGIN_START"});
		try {
			const res = await axios.post("auth/login", credentials);
			dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
			navigate("/");
		} catch (err) {
			dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
		}
	};

	return <div className="login">
		<div className="lContainer">
			<div onClick={handleMainPage} className="lowerText">Вернуться на главную</div>
			<input 
				type="text" 
				placeholder="имя пользователя" 
				id="username" 
				onChange={handleChange} 
				className="lInput" 
			/>
			<input
				type="password" 
				placeholder="пароль" 
				id="password" 
				onChange={handleChange} 
				className="lInput" 
			/>
			<button disabled={loading} onClick={handleClick} className="lButton">Авторизоваться</button>
			<div onClick={handleRegistrationPage} className="lowerText">Нету аккаунта? Зарегистрируйтесь</div>
			{error && <div className="errMessage">{error.message}</div>}
		</div>
	</div>;
};

export default Login;