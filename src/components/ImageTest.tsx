export const ImageTest = () => {
	return (
		<>
			<h3>Image Test</h3>
			<p>Image is in /public directory:</p>
			<img src={window.location.origin + `/images/keyboard.png`} />
		</>
	);
};
