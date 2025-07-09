import { useState } from "react";
import "./BookingForm.css";

const INITIAL_FORM_STATE = {
	name: "",
	email: "",
	date: "",
};

export const BookingForm = () => {
	const [form, setForm] = useState(INITIAL_FORM_STATE);
	const [error, setError] = useState("");

	const handleInputForm = ({ target: { name, value } }) => {
		setError("");
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!form.name) return setError("Name is required");
		if (!form.email) return setError("Email is required");
		if (!form.date) return setError("Date is required");

		alert(`Name: ${form.name}\nEmail: ${form.email}\nDate: ${form.date}`);
		console.log(form);
		setForm(INITIAL_FORM_STATE);
	};

	return (
		<div className="container-booking-form">
			<h1>HOTELS RESERVATION</h1>
			<form className="booking-form" onSubmit={handleSubmit}>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					autoComplete="name"
					value={form.name}
					onChange={handleInputForm}
				/>

				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					autoComplete="email"
					value={form.email}
					onChange={handleInputForm}
				/>

				<label htmlFor="date">Date</label>
				<input type="date" id="date" name="date" value={form.date} onChange={handleInputForm} />

				<button type="submit">Send</button>
			</form>
			{error && <span>{error}</span>}
		</div>
	);
};
