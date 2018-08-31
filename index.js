import ReactDOM from 'react-dom'
import React, {Component} from 'react'
import LadderComponent from './LadderComponent'

//Ladder component is used here
class LadderComponentDemo extends Component {
	render() {
		return <div>
			<LadderComponent/>
		</div>
	}
}

ReactDOM.render(<LadderComponentDemo/>, document.getElementById('container'))