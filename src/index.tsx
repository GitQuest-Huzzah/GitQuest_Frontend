import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("app"));
root.render(
	<Router>
		<App />
	</Router>
);
