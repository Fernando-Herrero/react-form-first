import { useState } from "react";
import "./LoginForm.css";

const users = [
	{
		id: 1,
		username: "alice123",
		password: "password1",
	},
	{
		id: 2,
		username: "bob_smith",
		password: "1234abcd",
	},
	{
		id: 3,
		username: "carlaT",
		password: "mySecret!",
	},
	{
		id: 4,
		username: "daniLopez",
		password: "qwerty45",
	},
	{
		id: 5,
		username: "evaM",
		password: "eva2025",
	},
];

const INITIAL_FORM_STATE = {
	username: "",
	password: "",
};

export const LoginForm = () => {
	const [form, setForm] = useState(INITIAL_FORM_STATE);
	const [error, setError] = useState("");

	const handleInputs = ({ target: { name, value } }) => {
		setError("");
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = () => {
		const userFound = users.find((user) => users.username.toLowerCase() === form.username.toLowerCase());

		if (!userFound) return setError("Username doesnt match");
		if (userFound.password !== form.password) return setError("Password doesnt match");

		alert("Login done! You can access");
		setError("");
	};

	return (
		<>
			<h1 className="login-form-title">Login Form</h1>
			<form className="login-form" onSubmit={handleSubmit}>
				<label htmlFor="username"></label>
				<input type="text" id="username" name="username" value={form.username} onChange={handleInputs} />

				<label htmlFor="password"></label>
				<input type="password" id="password" name="password" value={form.password} onChange={handleInputs} />

				<button type="submit">Submit</button>

				{error && <span>{error}</span>}
			</form>
		</>
	);
};
