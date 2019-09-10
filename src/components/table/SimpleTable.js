/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './css/simpleTable.css'

class SimpleTable extends Component{
    constructor(props) {
        super(props)
        this.state = {
            hadRendered: false, 
            messages: [],
            columns: [],
        }
    }
    
    render () {
        var messages = []
        
        if (this.props.messagesData && Object.entries(this.props.messagesData).length > 0 && !this.state.hadRendered){
            this.setState({ hadRendered: true })
            this.setState({ columns: this.props.headers })
            console.log('this.props.messagesData: ', this.props.messagesData)
            var index = 0
            for (const [name, qtMessageEmotions] of Object.entries(this.props.messagesData)) {
                messages[index] = []
                messages[index].push(name)
                for (const qtMessageEmotion of Object.values(qtMessageEmotions)) {
                    messages[index].push(qtMessageEmotion)
                }
                index ++
                // messages.push({ name, qtMessageEmotions })
            }
            console.log('messages: ', messages)
            console.log('IF 1')
            this.setState({ messages })
            console.log('props: ', this.props.messagesData)
        }

        var dataColumns = this.state.columns;
        // var dataRows = this.state.rows;
        var tableHeaders = (<thead>
            <tr>
                {dataColumns.map(function (column, index) {
                    return <th key={index}>{column}</th>;
                })}
            </tr>
        </thead>);
        var tableBody = this.state.messages.map(function (row, index) {
            return (<tr key={index}>{row.map((data, i) => {return <td>{data}</td>})}</tr>)
        });

        // Decorate with Bootstrap CSS
        return (<table className="table table-bordered table-hover" width="100%">
            {tableHeaders}
            {tableBody}
        </table>)

    }
}

export default SimpleTable
