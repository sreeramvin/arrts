import React, { Component } from 'react';
import './App.css';
import Table from './components/table';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        return (
            <div className="App">
                <Table />
            </div>

        );
    }
}

export default App;
