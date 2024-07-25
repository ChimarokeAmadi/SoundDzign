import React from "react";
import "./Blog.css";
import Rectangle13 from "../../assets/Rectangle13.png";
import Guitar from "../../assets/Thumbnailguitar.png";
import Vox from "../../assets/Thumbnail_harmonies.png";

const Blog = () => {
	return (
		<section id='blog' className='pink'>
			<div className='wrapper'>
				<h2 className='light'>Latest Posts</h2>
				<div className='blog-container'>
					<div className='blog-post'>
						<img src={Rectangle13} alt='' />
						<a href='#'>DAW</a>
						<p>How To Use Drum Machine in Logic Pro X</p>
					</div>
					<div className='blog-post'>
						<img src={Guitar} alt='' />
						<a href='#'>Mixing</a>
						<p>How To Mix Guitars Effectively</p>
					</div>
					<div className='blog-post span2'>
						<img src={Vox} alt='' />
						<a href='#'>Vox</a>
						<p>The Real Power of Harmonies in Music Production</p>
					</div>
				</div>

				<button className='all-posts'>All posts</button>
			</div>
		</section>
	);
};

export default Blog;
