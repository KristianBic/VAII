import React from "react";
import biggerDots from "./../../assets/image/icons/bigger_dots.svg";
import loginImage from "./../../assets/image/svgs/admin-image.svg";
import "../../assets/style/Login_style.css";

const Login = () => {
	return (
		<div class="login-body">
			<img class="bigger-dots one" src={biggerDots} />
			<img class="bigger-dots two" src={biggerDots} />
			<img class="bigger-dots three" src={biggerDots} />
			<div class="admin-container">
				<div class="admin-container-left">
					<img class="admin-image" src={loginImage} />
				</div>
				<div class="admin-container-right">
					<h4>Admin dashboard</h4>
					<div class="error"></div>
					<label>Login</label>
					<input type="text" placeholder="Login" id="login" />
					<label>Heslo</label>
					<input type="password" placeholder="Heslo" id="password" />
					<button class="loginBtn button">Login</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
