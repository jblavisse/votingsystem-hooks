import React, { Component } from 'react'

export default class QuestionPOO extends Component {
    state = {
        isVisible: false,
    }

    changeVisible = () => {
        console.log(this.state.isVisible)
        this.setState({
            isVisible: true
        })
    }

    render() {
        return (
            {this.props.title}
            <div>
                {this.state.isVisible ? <p>Coucou</p> : null}

                <button onClick={this.changeVisible}>Cliquer</button>
            </div>
        )
    }
}
