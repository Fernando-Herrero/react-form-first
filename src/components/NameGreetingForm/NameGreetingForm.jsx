import { useState } from "react";
import "./NameGreetingForm.css";

const INITIAL_INPUT_VALUES = {
	name: "",
	show: false,
};
export const NameGreetingForm = () => {
	const [values, setValues] = useState(INITIAL_INPUT_VALUES);
	const [error, setError] = useState("");

	const handleInput = ({ target: { name, value } }) => {
		setError("");

		setValues((prev) => ({ ...prev, [name]: value }));
	};

	const handleClick = () => {
		if (values.name.trim() === "") return setError("Name required");

		setValues((prev) => ({ ...prev, show: !prev.show }));
	};

	return (
		<div className="show-text">
			<label htmlFor="input-text"></label>
			<input type="text" name="name" id="input-text" value={values.name} onChange={handleInput} />
			{values.show && <p>Hola, {values.name}</p>}
			<button onClick={handleClick}>Show Text</button>
			{error && <div className="input-error">{error}</div>}
		</div>
	);
};
