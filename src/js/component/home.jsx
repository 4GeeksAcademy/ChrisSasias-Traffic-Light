import React, { useState } from "react";



//create your first component
const Home = () => {

	const [color, setColor] = useState("red-click"); 


	return (
		<div className="trafic-container">
			<div className="traffic element-cursor">
				<div
					className={color == "red-click" ? "red-click" : "red"}
					onClick={() => setColor("red-click")} >
				</div>
				<div
					className={color == "green-click" ? "green-click" : "green"}
					onClick={() => setColor("green-click")} >
				</div>
				<div 
					className={color == "yellow-click" ? "yellow-click" : "yellow"}
					onClick={() => setColor("yellow-click")} >
				</div>
			</div>
		</div>
	);
};

export default Home;
