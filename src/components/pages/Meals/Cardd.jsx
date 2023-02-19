import React from "react";
import { Card } from "antd";
const { Meta } = Card;
import { useNavigate } from "react-router-dom";

const Cardd = props => {
	const navigate = useNavigate();
	return (
		<div>
			<Card
				onClick={() => {
					navigate(`/meal/${props.idMeal}`);
				}}
				hoverable
				style={{
					width: 240,
				}}
				cover={<img alt="example" src={props.strMealThumb} />}>
				<Meta title={props.strMeal} />
			</Card>
		</div>
	);
};
export default Cardd;
