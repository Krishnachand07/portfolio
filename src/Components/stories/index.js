import React, { useState } from 'react';
import Stories from 'react-insta-stories';
import chand from '../../img/SKG01470.jpg';
import chand1 from '../../img/Group4.png';
import certf from '../../img/certf.png';
import ReactTimeAgo from 'react-time-ago';
import './index.css';
const Story = () => {
	const [ content ] = useState([
		{
			header: {
				heading: 'Me',
				subheading: <ReactTimeAgo date="July 15 2020, 06:27 pm" locale="en" />,
				profileImage: chand1
			},
			content: () => (
				<div className="bg-primary content w-100">
					<div class="text-center content-body text-light">
						<h1>Introducing Stories in My Profile</h1>
						<p className="lead mt-3">Quick reels about me</p>
						<p className="lead">...</p>
					</div>
				</div>
			)
		},
		{
			url: chand,
			header: {
				heading: 'Me',
				subheading: <ReactTimeAgo date="July 15 2020, 06:25 pm" locale="en" />,
				profileImage: chand1
			}
		},
		{
			url: certf,
			header: {
				heading: 'Me',
				subheading: <ReactTimeAgo date="July 15 2020, 08:00 pm" locale="en" />,
				profileImage: chand1
			}
		}
	]);
	return (
		<div className="story">
			<div>
				<div className="d-flex justify-content-center">
					<Stories stories={content} defaultInterval={15000} width="100%" height="100vh" />
				</div>
			</div>
		</div>
	);
};

export default Story;
