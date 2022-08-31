import React, { Component } from 'react'

class ToDo extends Component {
    constructor(props){
        super(props);
    }
    render() {
    return (
        <div>
            <h1>Hello Dojo!</h1>
            <h2>Things I need to do:</h2>
            <ul className="noB">
                <li>* Learn React</li>
                <li>* Finish LinkedIn and Resume</li>
                <li>* Get a Developer Job!!!!</li>
                <li>* Feed the Dogs</li>
            </ul>
        </div>
        )
    }
}

export default ToDo;
