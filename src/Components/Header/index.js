import React, { Component } from 'react';
import './index.css';
import { Row, Col } from 'reactstrap';
class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			init: '',
			content: [ 'Web developer', 'Designer', 'Photo editor', 'Architecture' ]
		};
		setTimeout(() => {
			this.renderContent();
		}, 1000);
	}

	renderContent = () => {
		this.setState({
			init: this.state.content[Math.floor(Math.random() * this.state.content.length)]
		});
		setTimeout(() => {
			this.renderContent();
		}, 500);
	};

	render() {
		return (
			<div className="header">
				<div className="container pt-5">
					<Row>
						<Col xl={12}>
							<h3 className="display-4 text-light">ambience</h3>
							<h2 className="display-3 text-light">Krishnachand Kannan</h2>
							<p className="ui-para text-light">Beginner as a {this.state.init}</p>
							<button
								className="btn-secondry"
								onClick={() => {
									window.scroll({
										behavior: 'smooth',
										top: 660
									});
								}}
							>
								Read me
							</button>
							<a
								href="https://drive.google.com/file/d/1TNOdjZkY2CpNWZP3i_uH87WVqrwAZzEA/view?usp=sharing"
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
	}
}

export default Header;
