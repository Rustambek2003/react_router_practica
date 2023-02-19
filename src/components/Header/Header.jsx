import React from "react";
import { Layout, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";

const { Header: AntHeader } = Layout;
const headerStyle = {
	textAlign: "center",
	color: "#fff",
	height: 64,
	paddingInline: 50,
	lineHeight: "64px",
};
const menuItem = [
	{
		key: 1,
		label: "Home",
	},
	{
		key: 2,
		label: "Meals",
	},
	{
		key: 3,
		label: "Contaks",
	},
];

const Header = () => {
	const navigate = useNavigate();

	return (
		<Layout>
			<AntHeader style={headerStyle}>
				<ul
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-evenly",
					}}>
					{menuItem.map(el => (
						<li key={el.key}>
							<Link to={el.label.toLowerCase()}>{el.label}</Link>
						</li>
					))}

					<Button
						style={{ marginTop: "20px" }}
						onClick={() => {
							navigate("/auth");
						}}>
						Sig in
					</Button>
				</ul>
			</AntHeader>
		</Layout>
	);
};
export default Header;
