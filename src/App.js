/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import SimpleTable from './components/table/SimpleTable';
import API from './api'

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			messages: '',
			qtMessages: {},
			qtMessagesGrouped: {},
			headersQtEmotions: ['Emoção', 'Quantidade'],
			headersEmotionsByUser: ['Nome', 'Alegria', 'Desgosto', 'Medo', 'Raiva', 'Surpresa', 'Tristeza']
		}
	}


	groupEmotionByUser(messages){
		let qtMessagesGrouped = {}

		for (const message of messages) {
			if (!qtMessagesGrouped[message.author.username]) qtMessagesGrouped[message.author.username] = {}
			if (!qtMessagesGrouped[message.author.username][message.label.displayName]) 
				qtMessagesGrouped[message.author.username][message.label.displayName] = 0

			qtMessagesGrouped[message.author.username][message.label.displayName]++
		}
		let emotionNames = this.state.headersEmotionsByUser.map(name => name.toLowerCase()) 
		emotionNames.shift()

		for (const qtMessageUser of Object.values(qtMessagesGrouped)) for (const emotionName of emotionNames)
			if (!qtMessageUser[emotionName]) qtMessageUser[emotionName] = 0

		this.setState({ qtMessagesGrouped })

		console.log('qtMessagesGrouped: ', qtMessagesGrouped)
		console.log('this.state.qtMessagesGrouped: ', this.state.qtMessagesGrouped)
	}

	componentDidMount(){
		API.get(`/messages`)
			.then(res => {	
				console.log('response: ', res)
				this.setState({messages: res.data})
				this.groupEmotionByUser(this.state.messages)
			}) 
			.catch(error =>{
				console.error('error: ', error)
			})
	}

    render() {
		return (
			<div id="emotions">
				<SimpleTable className='table' 
					messagesData={this.state.qtMessagesGrouped} 
					headers={this.state.headersEmotionsByUser}></SimpleTable>
			</div>
		)
	}
}

export default App