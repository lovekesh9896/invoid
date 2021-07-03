import { useEffect, useState, useRef } from "react";
import "./progress.css";

function Progress({ autoClose }) {
	let [isUploaded, setIsUploaded] = useState(false);
	const refContainer = useRef(null);

	function updatePercantage() {
		const numb = refContainer.current;
		let counter = 0;
		setInterval(() => {
			if (counter === 100) {
				clearInterval();
				setIsUploaded(true);
				numb.textContent = "Document Uploaded";
			} else {
				counter++;
				numb.textContent = counter + "%";
			}
		}, 80);
	}

	useEffect(() => {
		updatePercantage();
	}, []);

	function handleAutoClose() {
		window.close("", "_parent", "");
	}

	return (
		<div className="progress-container">
			<div className="circular">
				<div className="inner"></div>
				<div className="outer"></div>
				<div className="numb" ref={refContainer}>
					0%
				</div>
				<div className="circle">
					<div className="dot">
						<span></span>
					</div>
					<div className="bar left">
						<div className="progress"></div>
					</div>
					<div className="bar right">
						<div className="progress"></div>
					</div>
				</div>
			</div>

			{autoClose === "true" && isUploaded === true ? (
				<button onClick={handleAutoClose} className="auto-close">
					Close Window
				</button>
			) : null}
		</div>
	);
}

export default Progress;
