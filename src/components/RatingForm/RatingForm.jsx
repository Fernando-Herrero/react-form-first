import { useState } from "react";
import "./RatingForm.css";

export const RatingForm = () => {
	const [rating, setRating] = useState(0);

	const buttons = [
		{ id: 1, value: 1 },
		{ id: 2, value: 2 },
		{ id: 3, value: 3 },
		{ id: 4, value: 4 },
		{ id: 5, value: 5 },
	];

	const handleRating = (id) => {
		setRating(id);
	};

	return (
		<div className="rating-form">
			<h1>Product's Rating</h1>
			<div className="rating-btns">
				{buttons.map(({ id, value }) => (
					<button
						key={id}
						onClick={() => handleRating(id)}
						className={`rating-btn ${rating === id ? "selected" : "none"}`}
					>
						{value}
					</button>
				))}
			</div>
			{rating > 0 && <span>Your ratings product is:{rating}</span>}
		</div>
	);
};
