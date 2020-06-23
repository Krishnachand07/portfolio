import React, { useState } from 'react';
import './index.css';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Row, Col } from 'reactstrap';

const Footer = () => {
	const [ follow, setFollow ] = useState([
		{
			icon: <FaInstagram />,
			link: 'https://www.instagram.com/_kris___k_n__a/'
		},
		{
			icon: <FaFacebook />,
			link: 'https://www.facebook.com/krishna.chand.7359/'
		},
		{
			icon: <FaLinkedin />,
			link: 'https://www.linkedin.com/in/krishnachand-n-k-k-5055881a1/'
		}
	]);
	const renderLink = () => {
		return follow.map((data, i) => {
			return (
				<a href={data.link} key={i} target="_blank">
					<span className="text-muted">{data.icon}</span>
				</a>
			);
		});
	};
	return (
		<div className="footer">
			<div className="container">
				<h3 className="text-light">Follow me</h3>
				<Row className="mt-4">
					<Col xs={12}>
						<h3>{renderLink()}</h3>
					</Col>
					<Col xs={12} className="mt-4">
						<div className="text-muted">
							<p>
								Love your #passion<br />
								Make your desire life
							</p>
							<p className="mt-3">
								#frontendDeveloper #designer #vfx <br />😇
							</p>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Footer;
