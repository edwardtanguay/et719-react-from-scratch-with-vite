import "./main.scss";

const App = () => {
	return (
		<>
			<h1 className="text-3xl text-yellow-200 mb-3">
				React Vite site from scratch
			</h1>
			<h2 className="mt-[-.7rem] mb-4 text-gray-400 italic">This site was built from scratch with Vite, based on instructions from <a target="_blank" className="underline" href="https://frontendmasters.com/courses/complete-react-v8">this course</a>.</h2>
			<h3>Image Test</h3>
			<p>Image is in /public directory:</p>
			<img src="images/keyboard.png"/>
		</>
	);
};
export default App;
