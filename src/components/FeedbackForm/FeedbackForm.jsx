import { useState } from "react";
import "./FeedbackForm.css";

const INITIAL_FORM_STATE = {
	name: "",
	textarea: "",
	submitted: false,
	succes: false,
	error: "",
};

export const FeedbacForm = () => {
	const [form, setForm] = useState(INITIAL_FORM_STATE);

	const handleInfoForm = ({ target: { name, value } }) => {
		setForm((prev) => ({ ...prev, [name]: value, submitted: false, succes: false, error: "" }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!form.name || !form.textarea) return setForm((prev) => ({ ...prev, error: "Any field can't be empty" }));

		console.log(form);
		setForm((prev) => ({ ...prev, submitted: true, succes: false, error: "" }));
	};

	const handleFinalSubmitted = () => {
		setForm({ ...INITIAL_FORM_STATE, succes: true });
		console.log(form);
	};

	return (
		<div className="feedback-form-container">
			<h1>Feedbak Form</h1>
			<form className="feedback-form" onSubmit={handleSubmit}>
				<label htmlFor="feedback-name"></label>
				<input
					type="text"
					id="feedback-name"
					name="name"
					autoComplete="name"
					value={form.name}
					onChange={handleInfoForm}
				/>

				<label htmlFor="feedback-textarea"></label>
				<textarea
					id="feedback-textarea"
					name="textarea"
					autoComplete="off"
					value={form.textarea}
					onChange={handleInfoForm}
				/>
				<button type="submit">Send</button>
			</form>

			{form.error && <span className="error">{form.error}</span>}
			{form.submitted && (
				<div className="resume-info-form">
					<h2>Summary:</h2>
					<span>
						<strong>Name:</strong>
						{form.name}
					</span>
					<span>
						<strong>Textarea:</strong>
						{form.textarea}
					</span>
					<button onClick={handleFinalSubmitted}>Clear</button>
				</div>
			)}
			{form.succes && <span className="succes-message">{form.succes}</span>}
		</div>
	);
};
