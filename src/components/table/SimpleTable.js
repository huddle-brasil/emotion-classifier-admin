import React, { Component } from 'react'
import './css/simpleTable.css'

class SimpleTable extends Component{
    constructor(props) {
        super(props)
        this.state = {
            columns: ['Emoção', 'Quantidade'],
            rows: [{
                'Service': 'Veterinary Assitance',
                'Cost/Unit': 50,
                'Unit': '1 Hour',
                'Units Requested': 12
            }, {
                'Service': 'Veterinary Assitance 1',
                'Cost/Unit': 50,
                'Unit': '1 Hour',
                'Units Requested': 12
            }, {
                'Service': 'Veterinary Assitance 2',
                'Cost/Unit': 50,
                'Unit': '1 Hour',
                'Units Requested': 12
            }, {
                'Service': 'Veterinary Assitance',
                'Cost/Unit': 50,
                'Unit': '1 Hour',
                'Units Requested': 12
            }, {
                'Service': 'Veterinary Assitance',
                'Cost/Unit': 50,
                'Unit': '1 Hour',
                'Units Requested': 12
            }, {
                'Service': 'Veterinary Assitance',
                'Cost/Unit': 50,
                'Unit': '1 Hour',
                'Units Requested': 12
            }, {
                'Service': 'Veterinary Assitance',
                'Cost/Unit': 50,
                'Unit': '1 Hour',
                'Units Requested': 12
            }, {
                'Service': 'Veterinary Assitance',
                'Cost/Unit': 50,
                'Unit': '1 Hour',
                'Units Requested': 12
            }, {
                'Service': 'Veterinary Assitance',
                'Cost/Unit': 50,
                'Unit': '1 Hour',
                'Units Requested': 12
            }, {
                'Service': 'foo',
                'Unit': null,
                'Cost/Unit': undefined,
                'Units Requested': 42
            }]

        }
    }
    render () {
        console.log('props: ', this.props.messagesData)
        var messages = []
        if (Object.entries(this.props.messagesData).length > 0) {
            for (const [label, qtMessage] of Object.entries(this.props.messagesData)) {
                messages.push({ label: label, qtMessage: qtMessage })
            }
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
        var tableBody = messages.map(function (row, index) {
            return (
                <tr key={index}>
                    <td>{row.label}</td>
                    <td>{row.qtMessage}</td>
                </tr>)
        });

        // Decorate with Bootstrap CSS
        return (<table className="table table-bordered table-hover" width="100%">
            {tableHeaders}
            {tableBody}
        </table>)

    }
}

export default SimpleTable
