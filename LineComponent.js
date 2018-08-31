import React, {Component} from 'react'
import StateObject from './StateObject'
import {animator} from './Animator'
const w = window.innerWidth, h = window.innerHeight
const Line = ({num, size, x, offsetX, top}) => {
	return (<div style={{border:`${Math.min(w, h) / 90}px solid #3F51B5`, width : size, height:'0px', position:'absolute', left: num * (x - size), top:0}}>
		</div>)
}

export default class LineComponent extends Component {
	constructor(props) {
		super(props)
		this.sobj = new StateObject()
		this.state = {w : this.props.stepSize}
	}

	componentDidCatch(error, info) {
		console.log(error)
		console.log(info)
		this.setState({error:true})
	}

	handleTap() {
		this.sobj.startUpdating(() => {
			animator.start(() => {
				return this.sobj.update((sc) => {
					this.setState({w: this.props.stepSize * (1 - sc)})
					console.log(this.state.w)
				})
			})
		})
	}


	render() {
		const y = this.props.i * this.props.gap + this.props.offsetY 
		const scaledLines = [0, 1].map(a => <Line num={a} size={this.state.w/2} x = {this.props.stepSize} offsetX = {this.props.x} top = {y}/>)
		console.log(scaledLines)
		if (this.state.error) {
			return (<h1>some error</h1>)
		}
		return (<div onClick={this.handleTap.bind(this)} style={{position:'absolute', left : this.props.x, top:y }}>
				{scaledLines}
			</div>)

	}
}