import { useState } from "react";
import "./CharacterCountForm.css";

const INITIAL_COUNT_STATE = {
	text: "",
	state: false,
};

export const CharacterCountForm = () => {
	const [characters, setCharacters] = useState(INITIAL_COUNT_STATE);

	const handleInput = ({ target: { name, value } }) => {
		setCharacters((prev) => ({ ...prev, [name]: value, state: value.length > 0 }));
	};

	return (
		<div className="container-input-count">
			<label htmlFor="input-count"></label>
			<input
				type="text"
				id="input-count"
				name="text"
				value={characters.text}
				onChange={handleInput}
				placeholder="Type here..."
			/>
			{characters.state && <span>Keys pressed: {characters.text.length}</span>}
		</div>
	);
};
