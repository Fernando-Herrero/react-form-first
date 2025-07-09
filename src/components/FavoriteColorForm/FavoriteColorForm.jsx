import "./FavoriteColorForm.css";
import { useState } from "react";

const INITIAL_SELECT_VALUES = {
	color: "",
	state: false,
};
export const FavoriteColorForm = () => {
	const [select, setSelect] = useState(INITIAL_SELECT_VALUES);

	const handleFavoriteColor = ({ target: { name, value } }) => {
		setSelect((prev) => ({ ...prev, [name]: value, state: true }));
	};

	return (
		<div>
			<label htmlFor="colors">Select your favorite color:</label>
			<select name="color" id="colors" onChange={handleFavoriteColor}>
				<option value="" disabled selected>
					-- Select an option --
				</option>
				<option value="blue">Blue</option>
				<option value="red">Red</option>
				<option value="Pink">Pink</option>
				<option value="black">Black</option>
			</select>

			{select.state && <span>Your favorite color is {select.color}</span>}
		</div>
	);
};
