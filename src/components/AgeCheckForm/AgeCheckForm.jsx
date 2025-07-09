import { useState } from "react";
import "./AgeCheckForm.css";

const INITIAL_CHECK_VALUES = {
	age: 0,
	check: false,
};

export const AgeCheckForm = () => {
	const [checkAge, setCheckAge] = useState(INITIAL_CHECK_VALUES);
	const [error, setError] = useState("");

	const handleInputAge = ({ target: { name, value } }) => {
		setError("");
		setCheckAge((prev) => ({ ...prev, [name]: value, check: value.length > 0 }));
	};

	const handleCheckAge = () => {
		const ageNumber = parseInt(checkAge.age);

		if (isNaN(ageNumber)) return setError("A number is required.");

		if (ageNumber < 18) return setError("You're still a child.");

		if (ageNumber >= 18) return setError("You're already an adult.");
	};

	return (
		<div className="age-check-form">
			<h1>AGE CHECK</h1>

			<label htmlFor="age-check"></label>
			<input type="number" id="age-check" name="age" value={checkAge.age} onChange={handleInputAge} />
			<button onClick={handleCheckAge}>Chech age</button>
			{error && <span>{error}</span>}
		</div>
	);
};
