import React, { useState } from "react";
import "./Topics.css";
import Rectangle13 from "../../assets/Rectangle13.png";
import Rectangle14 from "../../assets/Rectangle14.png";
import Rectangle15 from "../../assets/Rectangle15.png";
import Rectangle16 from "../../assets/Rectangle16.png";
import Rectangle17 from "../../assets/Rectangle17.png";
import Rectangle18 from "../../assets/Rectangle18.png";

const Topics = () => {
	const [curentImage, setCurrentImage] = useState(Rectangle13);

	// const handleImageDisplay = (selectedImage) => {
	// 	setCurrentImage(selectedImage);
	// };

	return (
		<section id='topics' className='black'>
			<div className='wrapper'>
				<h2>What will you learn?</h2>
				<div className='content-container'>
					<ul>
						<li onMouseEnter={() => setCurrentImage(Rectangle14)}>
							{" "}
							<span>What are frequencies?</span>
						</li>
						<li onMouseEnter={() => setCurrentImage(Rectangle13)}>
							{" "}
							<span>Using DAW</span>
						</li>
						<li onMouseEnter={() => setCurrentImage(Rectangle15)}>
							{" "}
							<span>Vocals Processing</span>
						</li>
						<li onMouseEnter={() => setCurrentImage(Rectangle16)}>
							{" "}
							<span>Mixing</span>
						</li>
						<li onMouseEnter={() => setCurrentImage(Rectangle17)}>
							{" "}
							<span>Mixing Console</span>
						</li>
						<li onMouseEnter={() => setCurrentImage(Rectangle18)}>
							{" "}
							<span>Mastering</span>
						</li>
					</ul>

					<div className='image-container'>
						<img src={curentImage} alt='' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Topics;
