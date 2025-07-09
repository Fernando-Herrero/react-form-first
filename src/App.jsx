import { useState } from "react";
import "./App.css";
import { AgeCheckForm } from "./components/AgeCheckForm/AgeCheckForm";
import { BookingForm } from "./components/BookingForm/BookingForm";
import { CharacterCountForm } from "./components/CharacterCountForm/CharacterCountForm";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { CurrencyConvertForm } from "./components/CurrencyConvertForm/CurrencyConverForm";
import { FavoriteColorForm } from "./components/FavoriteColorForm/FavoriteColorForm";
import { FeedbacForm } from "./components/FeedbackForm/FeedbackForm";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { NameGreetingForm } from "./components/NameGreetingForm/NameGreetingForm";
import { RatingForm } from "./components/RatingForm/RatingForm";
import { RegisterUserForm } from "./components/RegisterUserForm/RegisterUserForm";

const users = [
	{
		id: 1,
		username: "alice123",
		password: "password1",
	},
	{
		id: 2,
		username: "bob_smith",
		password: "1234abcd",
	},
	{
		id: 3,
		username: "carlaT",
		password: "mySecret!",
	},
	{
		id: 4,
		username: "daniLopez",
		password: "qwerty45",
	},
	{
		id: 5,
		username: "evaM",
		password: "eva2025",
	},
];

function App() {
	const [usersState, setUsersState] = useState(users);

	return (
		<>
			<div className="container-users-registered-list">
				<h1>Users registered</h1>
				<ul className="users-registered-list">
					{usersState.map(({ id, username, password }) => (
						<li key={id}>
							Username: {username}
							<br />
							Password: {password}
						</li>
					))}
				</ul>
			</div>

			<ContactForm />
			<NameGreetingForm />
			<CharacterCountForm />
			<AgeCheckForm />
			<LoginForm users={usersState} />
			<FavoriteColorForm />
			<FeedbacForm />
			<RatingForm />
			<BookingForm />
			<CurrencyConvertForm />
			<RegisterUserForm addUser={(newUser) => setUsersState((prev) => [...prev, newUser])} />
		</>
	);
}

export default App;
