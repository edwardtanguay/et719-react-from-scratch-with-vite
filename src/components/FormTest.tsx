import { useState } from "react";

let counter = 0;
export const FormTest = () => {
	const [message, setMessage] = useState("");
	counter++;
	return (
		<>
			<h3>Form Test</h3>
			<div>Number of times component was rerendered: {counter}</div>
			<form>
				<input
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
			</form>
		</>
	);
};
