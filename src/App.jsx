import "./App.css";
import { AgeCheckForm } from "./components/AgeCheckForm/AgeCheckForm";
import { BookingForm } from "./components/BookingForm/BookingForm";
import { CharacterCountForm } from "./components/CharacterCountForm/CharacterCountForm";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { FavoriteColorForm } from "./components/FavoriteColorForm/FavoriteColorForm";
import { FeedbacForm } from "./components/FeedbackForm/FeedbackForm";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { NameGreetingForm } from "./components/NameGreetingForm/NameGreetingForm";
import { RatingForm } from "./components/RatingForm/RatingForm";

function App() {
	return (
		<>
			<ContactForm />
			<NameGreetingForm />
			<CharacterCountForm />
			<AgeCheckForm />
			<LoginForm />
			<FavoriteColorForm />
			<FeedbacForm />
			<RatingForm />
			<BookingForm />
		</>
	);
}

export default App;
