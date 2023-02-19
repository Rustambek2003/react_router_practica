import React, { useState, useEffect } from "react";
import Cardd from "./Cardd";
let url = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";

const Meals = () => {
	const [meals, setMeals] = useState(null);
	const getMeals = async () => {
		const res = await fetch(url);
		const data = await res.json();
		console.log("data: ", data);

		setMeals(data.meals);
	};
	useEffect(() => {
		getMeals();
	}, []);
	if (!meals) {
		return <h3>Loading...</h3>;
	}
	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				gap: "30px",
				background: "yellow",
			}}>
			{meals.map(el => (
				<Cardd {...el} />
			))}
		</div>
	);
};
export default Meals;
