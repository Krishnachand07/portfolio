import React from 'react';
import './App.css';
import Header from './Components/Header/index';
import About from './Components/About';
import Timeline from './Components/Timeline';
import Work from './Components/Work';
import Footer from './Components/footer';
const App = () => {
	return (
		<div>
			<Header />
			<About />
			<Timeline />
			<Work />
			<Footer />
		</div>
	);
};

export default App;
