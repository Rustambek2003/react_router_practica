import React from "react";
import { useAppContext } from "../../../context/AppContext";

const Auth = () => {
	const { setUser } = useAppContext();
	const onSubmit = e => {
		e.preventDefault();
		const form = e.target;
		const newUser = {
			userName: form.userName.value,
			userEmail: form.email.value,
		};
		console.log(newUser);
		e.target.reset();
		setUser({ ...newUser });
	};
	return (
		<div
			style={{
				background: "#F273E6",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				height: "100vh",
				paddingTop: "60px",
			}}>
			<div
				style={{
					width: "350px",
					height: "400px",
				}}>
				<form
					onSubmit={onSubmit}
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-evenly",
						alignItems: "center",
						height: "300px",
						gap: "20px",
					}}>
					<label>
						User ingName
						<br />
						<br />
						<input
							style={{
								width: "350px",
								height: "30px",
								border: "1px solid white",
								background: "none",
								borderRadius: "10px",
								color: "black ",
							}}
							type="text"
							name="userName"
						/>
					</label>
					<br />
					<label>
						Email
						<br />
						<br />
						<input
							style={{
								width: "350px",
								height: "30px",
								border: "1px solid white",
								background: "none",
								borderRadius: "10px",
								color: "black ",
							}}
							type="email"
							name="email"
						/>
					</label>
					<br />
					<input
						style={{
							width: "340px",
							background: "blue",
							height: "40px",
							borderRadius: "10px",
							border: "1px solid white",
							background: "#009EFF",
							color: "white",
						}}
						type="submit"
					/>
				</form>
			</div>
		</div>
	);
};
export default Auth;
