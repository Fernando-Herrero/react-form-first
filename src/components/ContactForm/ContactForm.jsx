import { useState } from "react";
import "./ContactForm.css";

const INITIAL_FORM_STATE = {
	name: "",
	email: "",
	reason: "",
	message: "",
};

export const ContactForm = () => {
	const [form, setForm] = useState(INITIAL_FORM_STATE);
	const [error, setError] = useState("");

	const handleFormInput = ({ target: { name, value } }) => {
		setError("");
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();

		if (form.name.trim() === "") return setError("Name is required");

		if (form.email.trim() === "") return setError("Email is required");

		if (form.reason === "") return setError("Please select a reason for contact.");

		if (form.message.trim() === "") return setError("Message is required");

		console.log(form);
		setForm(INITIAL_FORM_STATE);
		setError("");
	};

	const isFormIncomplete = !form.name.trim() || !form.email.trim() || !form.reason || !form.message.trim();

	return (
		<form className="contact-form" onSubmit={handleFormSubmit}>
			<label htmlFor="name">Name:</label>
			<input type="text" id="name" name="name" value={form.name} onChange={handleFormInput} />

			<label htmlFor="email">Email:</label>
			<input type="email" id="email" name="email" value={form.email} onChange={handleFormInput} />

			<label htmlFor="reason">Reason for Contact:</label>
			<select id="reason" name="reason" value={form.reason} onChange={handleFormInput}>
				<option value="" disabled>
					-- Select an option --
				</option>
				<option value="enquiry">Enquiry</option>
				<option value="support">Support</option>
				<option value="others">Others</option>
			</select>

			<label htmlFor="message">Message:</label>
			<textarea
				id="message"
				name="message"
				rows="4"
				cols="40"
				value={form.message}
				onChange={handleFormInput}
			></textarea>

			<button type="submit" disabled={isFormIncomplete}>
				Send
			</button>

			{error && <div className="form-error">{error}</div>}
		</form>
	);
};
