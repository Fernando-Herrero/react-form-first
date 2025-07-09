import { useState } from "react";
import "./CurrencyConvertForm.css";

const exchangeRatesFromEUR = [
	{ code: "usd", name: "US Dollars", rate: 1.1 },
	{ code: "gbp", name: "Pounds (GBP)", rate: 0.85 },
	{ code: "jpy", name: "Japanese Yen", rate: 140 },
	{ code: "cad", name: "Canadian Dollars", rate: 1.4 },
	{ code: "aud", name: "Australian Dollars", rate: 1.6 },
	{ code: "chf", name: "Swiss Franc", rate: 1.05 },
	{ code: "cny", name: "Chinese Yuan", rate: 7.3 },
	{ code: "inr", name: "Indian Rupee", rate: 90 },
	{ code: "mxn", name: "Mexican Peso", rate: 22 },
];

const INITIAL_VALUES_EXCHANGE = {
	euros: "",
	currency: "",
	result: "",
};

export const CurrencyConvertForm = () => {
	const [change, setChange] = useState(INITIAL_VALUES_EXCHANGE);
	const [error, setError] = useState("");

	const handleChangeCurrency = ({ target: { name, value } }) => {
		setError("");
		setChange((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!change.euros) return setError("Provide a valid amount of euros");
		if (!change.currency) return setError("Select a currency to convert");

		const eurosToNumber = parseInt(change.euros);

		const filterCurrency = exchangeRatesFromEUR.find((exchange) => exchange.code === change.currency);

		if (filterCurrency) {
			const conversionResult = eurosToNumber * filterCurrency.rate;
			setChange((prev) => ({ ...prev, result: conversionResult.toFixed(2) }));
		}
	};

	return (
		<div className="container-currency-convert-form">
			<h1>CURRENCY CONVERT</h1>
			<form className="currency-convert-form" onSubmit={handleSubmit}>
				<label htmlFor="number">Insert quantity</label>
				<input type="number" id="number" name="euros" value={change.euros} onChange={handleChangeCurrency} />

				<label htmlFor="currency">Select currency</label>
				<select name="currency" id="currency" value={change.currency} onChange={handleChangeCurrency}>
					<option value="" disabled>
						-- Select an option --
					</option>
					{exchangeRatesFromEUR.map(({ code, name }) => (
						<option key={code} value={code}>
							{name}
						</option>
					))}
				</select>

				<button type="submit">Convert</button>
			</form>

			{error && <span>{error}</span>}
			<span>
				{change.result}
				{change.currency}
			</span>
		</div>
	);
};
