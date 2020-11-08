import React, { Component } from "react";
import ReactDOM from "react-dom";

class FlavorForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "coconut", error: "" };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value, error: "" });
	}
	handleSubmit(event) {
		event.preventDefault();
		if (this.state.value === "coconut") {
			this.setState({ error: "you cannot select that" });
			return;
		}

		console.log("Your favorite flavor is: " + this.state.value);
	}

	render() {
		const { error } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Pick your favorite flavor:
					<select
						value={this.state.value}
						onChange={this.handleChange}>
						<option value="grapefruit">Grapefruit</option>
						<option value="lime">Lime</option>
						<option value="coconut">Coconut</option>
						<option value="mango">Mango</option>
					</select>
				</label>
				<input type="submit" value="Submit" />
				{error}
			</form>
		);
	}
}

const rootEle = document.getElementById("app");
ReactDOM.render(<FlavorForm />, rootEle);
