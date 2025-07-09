import "./App.css";
import { AgeCheckForm } from "./components/AgeCheckForm/AgeCheckForm";
import { CharacterCountForm } from "./components/CharacterCountForm/CharacterCountForm";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { NameGreetingForm } from "./components/NameGreetingForm/NameGreetingForm";

function App() {
	return (
		<>
			<ContactForm />
			<NameGreetingForm />
			<CharacterCountForm />
			<AgeCheckForm />
		</>
	);
}

export default App;
