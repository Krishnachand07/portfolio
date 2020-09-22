import React, { useState } from 'react';
import './index.css';
import { Row, Col } from 'reactstrap';
import chand2 from '../../img/Krish-2.jpg';
import _ from 'lodash';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const About = () => {
	const [ known ] = useState([
		{ title: 'Ae', percentage: '35' },
		{ title: 'Bootstrap', percentage: '30' },
		{ title: 'Lightroom', percentage: '50' },
		{ title: 'Photoshop', percentage: '60' },
		{ title: 'React', percentage: '15' },
		{ title: 'XD', percentage: '50' }
	]);
	const renderKnown = () => {
		return _.map(known, (data, i) => {
			return (
				<Col className="block mt-3" xs={5} lg={2} md={4} key={i}>
					<div className="text">{data.title}</div>
					<div className="circular">
						<CircularProgressbar
							value={data.percentage}
							strokeWidth={1}
							styles={{
								text: {
									fill: '#fff'
								},
								path: {
									stroke: '#aaa'
								},
								trail: {
									stroke: 'transparent'
								}
							}}
							text={data.percentage}
						/>
					</div>
				</Col>
			);
		});
	};
	return (
		<div className="about">
			<div className="text-uppercase position-sticky">
				<h3 className="text-light display-4 text-center">About me</h3>
			</div>
			<div className="container">
				<Row>
					<Col xs={12} className="mt-4">
						<Row className="image">
							<Col md={12} lg={4} className="align-self-center text-center">
								<img src={chand2} loading="eager" alt="KC-1" />
							</Col>
							<Col className="text-light text-center" md={12} lg={8}>
								<blockquote className="quote mt-3">
									<h4 className="text-uppercase mb-0">Attitude is everything!</h4>
									<footer className="blockquote-footer">
										<cite>Anonymous</cite>
									</footer>
								</blockquote>
								<div className="text-muted">
									<p className="lead mb-4">
										Love to edit,<span className="text-light"> U1 Music drugs... </span>
										<br />Interested in Architect a building, designing, developing a Web pages,
										<span className="text-light">Video graphics edits</span> and 3D environment<br />
									</p>
									<p className="lead mb-4">
										Favi Cricket, basically I'm Lefthand batsmen<br /> Mostly like Non-veg Biriyani,
										Enfield,<span className="text-light"> Peace place,</span> Violet family<br />{' '}
										But interested in Black<br />
									</p>
									<p className="lead">
										Become a Architect IT Engineer<br />{' '}
										<span className="text-light">
											{' '}
											{'<'} Think different {'>'}{' '}
										</span>
									</p>
								</div>
							</Col>
						</Row>
					</Col>
					<Col xs={12} className="known">
						<Row className="d-flex justify-content-center">{renderKnown()}</Row>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default About;
