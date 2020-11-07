import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./main.css";
const Example = () => {
	const { handleSubmit, register, errors } = useForm();
	const onSubmit = (values) => console.log(values);

	return (
		<React.Fragment>
			<form onSubmit={handleSubmit(onSubmit)} className="form">
				<div className="form-item">
					<input
						name="username"
						ref={register({
							required: " Name Required",
							validate: (value) =>
								value !== "admin" || "Nice try!",
						})}
						className="form-input"
						placeholder="first name"
						aria-label="first name"
					/>
				</div>
				<div className="form-item">
					<input
						name="email"
						ref={register({
							required: " Email Required",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "invalid email address",
							},
						})}
						className="form-input"
						placeholder="email"
						aria-label="email"
					/>
				</div>

				<button className="form-button" type="submit">
					SignUp
				</button>
			</form>
			<p>
				{errors.username && errors.username.message}
				{errors.email && errors.email.message}
			</p>
		</React.Fragment>
	);
};

const rootElement = document.getElementById("app");
ReactDOM.render(<Example />, rootElement);
