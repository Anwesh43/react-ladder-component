import React, {Component} from 'react'
import LineComponent from './LineComponent'
import {Fragment} from 'react'
export default class LadderComponent extends Component {
	constructor() {
		super()
		this.state = {w : window.innerWidth, h : window.innerHeight}
	}

	componentDidMount() {
		window.onresize = () => {
			this.setState({w : window.innerWidth, h : window.innerHeight})
		}
	}
	getLines() {
		return [0, 1, 2, 3, 4, 5].map((num) => (<LineComponent i={num} stepSize={this.state.w / 7} offsetY = {this.state.h/5} gap = {this.state.h/12} x = {this.state.w/2 - this.state.w/14}/>))
	}
	render() {
		return (<Fragment>
					{this.getLines()}
				</Fragment>)
	}
}