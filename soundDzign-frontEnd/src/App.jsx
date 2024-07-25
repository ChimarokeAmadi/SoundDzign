import React from "react";
import Header from "./components/Header/Header";
import Topics from "./components/Topics/Topics";
import Info from "./components/Info/Info";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
	return (
		<>
			<Header />
			<Topics />
			<Info />
			<Blog />
			<Testimonials />
			<Footer />
		</>
	);
};

export default App;
