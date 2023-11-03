import { FormTest } from "../components/FormTest";
import { ImageTest } from "../components/ImageTest";
import { useParams } from "react-router-dom";

export const Details = () => {
	const { id } = useParams();
	return (
		<>
			<div>this is the details page</div>
			<h2 className="mb-4 text-gray-400 italic">
				This site was built from scratch with Vite, based on
				instructions from{" "}
				<a
					target="_blank"
					className="underline"
					href="https://frontendmasters.com/courses/complete-react-v8"
				>
					this course
				</a>
				.
			</h2>
			{id ? <p>showing id={id}</p> : <p>main details page</p>}
			<ImageTest />
			<FormTest />
		</>
	);
};
