import { useState } from "react";
import "./RegisterUserForm.css";

const INITIAL_FORM_STATE = {
	username: "",
	email: "",
	password: "",
};

export const RegisterUserForm = ({ addUser }) => {
	const [form, setForm] = useState(INITIAL_FORM_STATE);
	const [error, setError] = useState("");

	const handleInputs = ({ target: { name, value } }) => {
		setError("");
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!form.username) return setError("Name required");
		if (!form.email) return setError("Email required");
		if (!form.password) return setError("Password required");

		addUser({ id: Date.now(), username: form.username, password: form.password, email: form.email });
		alert("User registered successfully");
		setForm(INITIAL_FORM_STATE);
	};

	return (
		<form className="register-user-form" onSubmit={handleSubmit}>
			<h1>Register Form</h1>
			<label htmlFor="username"></label>
			<input
				type="text"
				id="username"
				name="username"
				autoComplete="name"
				placeholder="Name..."
				value={form.username}
				onChange={handleInputs}
			/>

			<label htmlFor="email"></label>
			<input
				type="email"
				id="email"
				name="email"
				autoComplete="email"
				placeholder="Email..."
				value={form.email}
				onChange={handleInputs}
			/>

			<label htmlFor="password"></label>
			<input
				type="password"
				id="password"
				name="password"
				autoComplete="password"
				placeholder="Password..."
				value={form.password}
				onChange={handleInputs}
			/>

			<button type="submit">Submit</button>

			{error && <span>{error}</span>}
		</form>
	);
};
