import React from "react";
import "./Testimonials.css";
import Emily from "../../assets/Rectangle19_emily.png";
import Robert from "../../assets/Rectangle19_robert.png";
import Peter from "../../assets/Rectangle19_peter.png";
const Testimonials = () => {
	return (
		<section id='testimonials' className='dark-grey'>
			<div className='wrapper'>
				<h2>What our students say?</h2>

				<div className='testimonials-container'>
					<div className='testimonial-info'>
						<img src={Peter} alt='Peter-image' />
						<div>
							<p className='student-name'>Peter Adams</p>
							<p className='student-testimonial'>
								This is a great course. I got to learn a lot.
							</p>
						</div>
					</div>

					<div className='testimonial-info'>
						<img src={Robert} alt='Robert-image' />
						<div>
							<p className='student-name'>Robert Fox</p>
							<p className='student-testimonial'>
								I got to learn a lot about Music Production with this course.
								Thanks :)
							</p>
						</div>
					</div>

					<div className='testimonial-info'>
						<img src={Emily} alt='Emily-image' />
						<div>
							<p className='student-name'>Emily Smith</p>
							<p className='student-testimonial'>Awesome! Great job!!</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
