import { useState } from "react";
import "./LoginForm.css";

const INITIAL_FORM_STATE = {
	username: "",
	password: "",
};

const INITIAL_STATE = {
	error: "",
	success: "",
};

export const LoginForm = ({ users }) => {
	const [form, setForm] = useState(INITIAL_FORM_STATE);
	const [state, setState] = useState(INITIAL_STATE);

	const handleInputs = ({ target: { name, value } }) => {
		setState({ error: "", success: "" });
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		console.log("Username ingresado:", form.username);

		const userFound = users.find(
			(user) => user.username.toLowerCase().trim() === form.username.toLowerCase().trim()
		);

		if (!userFound) return setState({ error: "Username doesnt match", success: "" });
		if (userFound.password !== form.password) return setState({ error: "Password doesnt match", success: "" });

		setState({ error: "", success: "Login done! You can access" });
	};

	return (
		<>
			<h1 className="login-form-title">Login Form</h1>
			<form className="login-form" onSubmit={handleSubmit}>
				<label htmlFor="username"></label>
				<input
					type="text"
					id="username"
					name="username"
					autoComplete="username"
					value={form.username}
					onChange={handleInputs}
				/>

				<label htmlFor="password"></label>
				<input
					type="password"
					id="password"
					name="password"
					autoComplete="current-password"
					value={form.password}
					onChange={handleInputs}
				/>

				<button type="submit">Submit</button>

				{state.error && <span className="error">{state.error}</span>}
				{state.success && <span className="success">{state.success}</span>}
			</form>
		</>
	);
};
