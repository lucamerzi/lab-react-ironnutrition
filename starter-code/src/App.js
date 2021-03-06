import React, { Component } from 'react';
import './App.css';
import FoodBox from './FoodBox';
import foods from './foods.json'


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			foods: foods,
			search: "",
			todaysFoods: []
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = (food, qty) =>{
		let todaysFoods = this.state.todaysFoods
		todaysFoods.push({...food, qty})
		this.setState({todaysFoods})
		console.log(this.state.todaysFoods)
	}

	searchFood(event) {
		let inputValue = event.target.value;
		inputValue = inputValue.toLowerCase();
		let filteredArray = foods.filter((el, i) => {
			const foodName = el.name.toLowerCase()
			return foodName.indexOf(inputValue) !== -1
		})
		console.log(filteredArray)

		this.setState({
			foods: filteredArray
		})

	}

	render() {
		const { foods } = this.state

		return (
			<div className="container">
				<div className="field">
					<label className="label">Name</label>
					<div className="control">
						<input
							onChange={event => this.searchFood(event)}
							className="input" type="text" placeholder="Text input" />
					</div>
				</div>

				<div class="columns is-mobile">
					<div class="column">
						{
							foods.map((el, index) => {
								return <FoodBox key={index} oneFood={el} 
								onClick={this.handleClick} />
							})
						}
					</div>

					<div class="column">

						<h1>Today's foods</h1>
						<ul>
							 {this.state.todaysFoods.map( el => {
								return <li> {el.qty} {el.name} = {parseInt(el.qty) * el.calories } calories </li>
							} )} 
						<li>Total  </li>
						</ul>

					</div>
				</div>
			</div>
		);
	}
}

export default App;
