import React, { Component } from 'react';

class FoodBox extends Component {
	constructor(props){
		super(props)
		this.state = { qty : 1 }
	}

	handleChange(event){
		let v = event.target.value
		this.setState({ qty: v })
	}

	render() {

		return (
			<div>
				<div className="box">
					<article className="media">
						<div className="media-left">
							<figure className="image is-64x64">
								<img src={ this.props.oneFood.image } />
							</figure>
						</div>
						<div className="media-content">
							<div className="content">
								<p>
									<strong>{this.props.oneFood.name}</strong> <br />
									<small>{ this.props.oneFood.calories }</small>
								</p>
							</div>
						</div>
						<div className="media-right">

							<div className="field has-addons">
								<div className="control">
									<input
										className="input"
										type="number"
										value={this.state.qty}
										onChange={ event => this.handleChange(event) }
									/>
								</div>
								<div className="control">
									<button 
									className="button is-info"
									onClick={ () => {this.props.onClick(this.props.oneFood, this.state.qty)} }
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