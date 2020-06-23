import React, { useState, useEffect } from 'react';
import './index.css';
import { Row, Col } from 'reactstrap';
const Header = () => {
	const [ content, setContent ] = useState([ 'Web developer', 'Designer', 'Photo editor', 'Architecture' ]);
	const [ init, setInit ] = useState('');

	useEffect(() => {
		setInterval(() => {
			renderContent();
		}, 1000);
	}, []);

	const renderContent = () => {
		setInit(content[Math.floor(Math.random() * content.length)]);
	};

	return (
		<div className="header">
			<div className="container pt-5">
				<Row>
					<Col xl={12}>
						<h3 className="display-4 text-light">ambience</h3>
						<h2 className="display-3 text-light">Krishnachand Kannan</h2>
						<p className="ui-para text-light">Beginner as a {init}</p>
						<button
							className="btn-secondry"
							onClick={() => {
								window.scroll({
									top: '500',
									behavior: 'smooth'
								});
							}}
						>
							Get started
						</button>
						<a
							href="https://docs.google.com/document/d/1Otcr_Tuq4hXuO388meGyDuXFG9M7EhYT1piC9RcbUf0/edit?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="btn-secondry">See Resume</button>
						</a>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Header;
