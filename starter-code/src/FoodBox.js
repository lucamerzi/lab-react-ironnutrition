
import React, { Component } from 'react';

class FoodBox extends Component {
	render() {

		const {oneFood} = this.props

		return (
			<div>
				<div className="box">
					<article className="media">
						<div className="media-left">
							<figure className="image is-64x64">
								<img src={ oneFood.image } />
							</figure>
						</div>
						<div className="media-content">
							<div className="content">
								<p>
									<strong>{oneFood.name}</strong> <br />
									<small>{ oneFood.calories }</small>
								</p>
							</div>
						</div>
						<div className="media-right">
							<div className="field has-addons">
								<div className="control">
									<input
										className="input"
										type="number"
										value="1"
										
									/>
								</div>
								<div className="control">
									<button 
									onClick={event => console.log("event", event.target)}
									className="button is-info"
									
									>
										+
							</button>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>
		);
	}
}

export default FoodBox;