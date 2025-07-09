import "./App.css";
import { AgeCheckForm } from "./components/AgeCheckForm/AgeCheckForm";
import { CharacterCountForm } from "./components/CharacterCountForm/CharacterCountForm";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { FavoriteColorForm } from "./components/FavoriteColorForm/FavoriteColorForm";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { NameGreetingForm } from "./components/NameGreetingForm/NameGreetingForm";

function App() {
	return (
		<>
			<ContactForm />
			<NameGreetingForm />
			<CharacterCountForm />
			<AgeCheckForm />
			<LoginForm />
			<FavoriteColorForm />
		</>
	);
}

export default App;
