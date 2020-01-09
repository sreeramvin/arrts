import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
            };
    }  
    componentDidMount() {
        fetch('http://5e155b3e21f9c90014c3d0b9.mockapi.io/group')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    list: json
                })
            })
    }
    renderTableData() {
         return this.state.list.map((lis,index) => {            
            return (
                <div>
                    <tr key={index}>
                        <td style={{ align:'right' ,padding:'10px'}}>{lis.name}</td>
                    <td>{lis.score}</td>                 
                    </tr>
                </div>
            )
        })
    }

    render() {
        return (
            <table>
                <thead >
                    <h1 style={{ fontSize: '30px', fontWeight: 'bold' }}>Score Board </h1>
                    <tr>
                        <th>House-Name</th>
                        <th className="m-0">  Score</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableData()}   
                </tbody>
            </table>
        );
    }
   }


export default Table;



