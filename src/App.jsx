import "./App.css";
import { CharacterCountForm } from "./components/CharacterCountForm/CharacterCountForm";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { NameGreetingForm } from "./components/NameGreetingForm/NameGreetingForm";

function App() {
	return (
		<>
			<ContactForm />
			<NameGreetingForm />
			<CharacterCountForm />
		</>
	);
}

export default App;
