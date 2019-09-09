import React, {Component} from 'react';
import './css/simpleTable';

class App extends SimpleTable {
    constructor(props){
        super(props)
        this.state = {
            colums: [],
            rows: [{

            }]
        }
    }
    render () {
        const columns = this.props.data.colums
        const rows = this.props.data.rows
        const tableHeaders = (
            <thead>
                <tr>
                    {columns.map(function (column) {
                        return <th>{column}</th>
                    })}
                </tr>
            </thead>
        )
    
        const tableBody = (
            <thead>
                <tr>
                    {rows.map(function (row) {
                        return (
                            <tr>
                                {columns.map(function (column) {
                                    return (<td>{row[column]}</td>)
                                })}
                            </tr>
                        )
                    })}
                </tr>
            </thead>
        )
    }
}