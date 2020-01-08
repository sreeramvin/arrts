import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Table = ({ score }) => {
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
                {(score.length > 0) ? score.map((score, index) => {
                    return (
                        <tr key={index}>
                            <td>{score.name}</td>
                            <td>{score.score}</td>
                        </tr>
                           ) 
                       }
                ) : <tr><td></td></tr> 
                }
        </tbody>
        </table>
    );
}

export default Table