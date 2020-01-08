import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';

class component extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
            };
    }
    componentDidMount() {
        fetch('http://5e155b3e21f9c90014c3d0b9.mockapi.io/group')
            .then(res => res.json())
            .then(json => json.score)
            .then(score => this.setState({ 'score': score }))
    }
    renderTableData() {
        return this.state.students.map((list, index) => {            
            return (
                <tr key={index}>
                    <td>{list.name}</td>
                    <td>{list.age}</td>                 
                </tr>
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


export default component;



