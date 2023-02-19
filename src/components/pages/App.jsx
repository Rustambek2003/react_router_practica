import React from "react";
import Header from "../Header/Header";
import Contaks from "./contaks/Contaks";
import { Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import Meals from "./Meals/Meals";
import Error from "./Error";
import MealInfo from "./Meals/MealInfo";
import Auth from "./auth/Auth";

const App = () => {
	return (
		<div>
			<Header />
			{/* <Home/>
      <Meals/>
      <Contaks/>
       */}
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/meals" element={<Meals />} />
				<Route path="/meal/:id" element={<MealInfo />} />
				<Route path="/auth" element={<Auth />} />
				<Route path="/contaks" element={<Contaks />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
};
export default App;
