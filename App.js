import React, { Component } from 'react';
import './App.css';
import Table from './components/table';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:3000/api/droplets')
            .then(res => res.json())
            .then(json => json.score)
            .then(score => this.setState({ 'score': score }))
    }
    render() {
        return (
            <div className="App">
                <Table score={this.state.score} />
            </div>

        );
    }
}

export default App;
