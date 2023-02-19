import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/pages/App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppContext from "./context/AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<AppContext>
			<App />
		</AppContext>
	</BrowserRouter>
);
