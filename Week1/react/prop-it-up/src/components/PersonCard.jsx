import React, { Component } from 'react'

const btnStyle = {
    padding: '10px 15px',
    fontFamily: 'serif',
    background: 'linear-gradient(30deg, purple, magenta',
    color: 'snow'
};

class PersonCard extends Component {
    constructor(props){
        super(props);

        this.state = {
            age: this.props.age
        }
    }
    render() {
        return (
            <div>
                <h2>{this.props.lastName}, {this.props.firstName}</h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button style={btnStyle} onClick={ () => { this.setState({age: this.state.age + 1})} }>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        )
    }
}

export default PersonCard;