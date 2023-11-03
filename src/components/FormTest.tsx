import { useState } from "react";

let counter = 0;
export const FormTest = () => {
	const [message, setMessage] = useState("");
	const [showIt, setShowIt] = useState(false);
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
			{message.includes("book") && <div>Are you looking for books?</div>}
			{showIt && <div>this should be shown</div>}
		</>
	);
};
