import HomePage from "./pages/HomePage/HomePage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import AuthPage from "./pages/AuthPage/AuthPage";
import { Routes, Route, Router } from "react-router-dom";

function App() {


	return (
		<PageLayout>
			<HomePage />
		</PageLayout>
	);
}

export default App;