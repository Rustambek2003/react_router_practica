import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MealInfo = () => {
	const params = useParams();
	console.log("params: ", params);
	const foodId = params.id;
	let ing = [];
	let measure = [];

	const [meal, setMeal] = useState(null);
	const [ings, setIngs] = useState([]);
	const [measures, setMeasures] = useState([]);

	const navigate = useNavigate;

	const getMeals = async () => {
		const res = await fetch(
			"https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + foodId
		);
		const data = await res.json();
		let foodIng = data.meals[0];
		for (let i = 1; i < 21; i++) {
			if (
				foodIng[`strIngredients ${i}`] !== null &&
				foodIng[`strIngredients ${i}`] !== ""
			) {
				ing.push(foodIng[`strIngredient${i}`]);
				measure.push(foodIng[`strMeasure${i}`]);
			}

			setMeal(data.meals[0]);
		}

		setIngs([...ing]);
		setMeasures([...measures]);
		setMeal(data.meals[0]);
	};
	useEffect(() => {
		getMeals();
	}, []);
	if (!meal) {
		return <h3>Loading...</h3>;
	}
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				background: "#A64B2A",
				color: "white",
			}}>
			<div>
				<h3>{meal.strMeal}</h3>
				<img style={{ width: "350px" }} src={meal.strMealThumb} alt="" />
			</div>
			<div>
				<h3>Ingredients</h3>
				<div style={{ display: "flex", flexWrap: "wrap", gap: "1px" }}>
					{ings.map(ingName => {
						let imgUrl = "https://www.themealdb.com/images/ingredients/";
						return (
							<div>
								<img
									style={{ width: "180px" }}
									src={imgUrl + ingName + ".png"}
									alt=""
								/>
								<br />
								<p>{ingName}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default MealInfo;
