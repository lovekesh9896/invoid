import "./App.css";
import { useState } from "react";
import { upload, secure } from "./icons/icons";
import Progress from "./Progress";

function App({ domElement }) {
	const docName = domElement.getAttribute("data-doc-name");
	const backColor = domElement.getAttribute("data-back-color");
	const autoClose = domElement.getAttribute("data-auto-close") || "true";

	let [imgSrc, setImgSrc] = useState("");
	let [imgTitle, setImgTitle] = useState("");
	let [isUploading, setIsUploading] = useState(false);

	function imagePreview(e) {
		console.log(e.target.files[0]);

		const objectUrl = URL.createObjectURL(e.target.files[0]);
		setImgSrc(objectUrl);
		setImgTitle(e.target.files[0].name);
	}

	function resetImage(e) {
		URL.revokeObjectURL(imgSrc);
		setImgSrc("");
		setImgTitle("");
	}

	function handleUploadBtn(e) {
		setIsUploading(true);
	}

	return (
		<div className="app" style={{ background: backColor }}>
			<div className="image-upload-container">
				<h2 className="heading">Upload {docName}</h2>
				{isUploading === true ? (
					<Progress autoClose={autoClose} />
				) : (
					<div>
						<div className="img-title">
							<h3>Title</h3>
							<input
								type="text"
								placeholder="Your Image Title"
								value={imgTitle}
								onChange={(e) => setImgTitle(e.target.value)}
							/>
						</div>
						{imgSrc !== "" ? (
							<div className="preview">
								<h3>Preview</h3>
								<img src={imgSrc} alt="Preview not available" />
								<button
									className="upload-btn"
									onClick={handleUploadBtn}
								>
									Upload Document
								</button>
								<button
									onClick={resetImage}
									className="remove-btn"
								>
									Select New Document
								</button>
							</div>
						) : (
							<div className="upload-container">
								<h3>Attach {docName}</h3>
								<div className="upload-area">
									<div style={{ width: "32px" }}>
										{upload}
									</div>
									<strong>Drag and Drop Here</strong>
									<strong>or</strong>
									<strong>
										<label
											style={{
												color: "#0044FF",
												cursor: "pointer",
											}}
											htmlFor="img"
										>
											Browse files
										</label>
									</strong>
									<input
										onChange={imagePreview}
										id="img"
										type="file"
										style={{ display: "none" }}
									/>
								</div>
								<div className="upload-info">
									<p>
										Accepted File Types: .png and .jpg only
									</p>
									<p style={{ display: "flex" }}>
										{" "}
										<span
											style={{
												width: "20px",
												marginRight: "8px",
											}}
										>
											{secure}
										</span>{" "}
										Secure
									</p>
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
