import React, { Component } from 'react'
import SimpleTable from '.components/table/SimpleTable';
import api from './api';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	componentDidMount() {
		const messages = await api.get('/messages')
		console.log("messages: ", messages.data);
	}

	render() {
		return(
			<SimpleTable messages="message"></SimpleTable>
		)
	}
}

function App() {
	return(

	)
}

export default App