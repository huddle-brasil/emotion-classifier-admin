import React, { Component } from 'react'
import SimpleTable from './components/table/SimpleTable';
import API from './api'

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			messages: '',
			qtMessages: {}
		}
	}

	groupByEmotion(messages){
		let qtMessages = {}
		for (const message of messages) {
			if (!qtMessages[message.label.displayName]) qtMessages[message.label.displayName] = 0
			qtMessages[message.label.displayName] ++
		}
		this.setState({qtMessages})
		console.log('Grouped emotions: ', this.state.qtMessages)
	}

	componentDidMount(){
		API.get(`/messages?filter={}`)
			.then(res => {	
				console.log('response: ', res)
				this.setState({messages: res.data})
				this.groupByEmotion(this.state.messages)
			}) 
			.catch(error =>{
				console.error('error: ', error)
			})
	}

    render() {
		return (
			<SimpleTable messagesData={this.state.qtMessages}></SimpleTable>
		)
	}
}

export default App