import { motion } from "framer-motion";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";

function MyApp({ name }) {
	return (
		<motion.h1
			animate={{ fontSize: "40px", color: "#ff2994", x: -10, y: 30 }}
			style={{ fontFamily: "monospace" }}
		>
			Hello {name}! Long time!.
		</motion.h1>
	);
}

function Container() {
	return <MyApp name="sohail" />;
}

ReactDOM.render(<Container />, document.getElementById("app"));
