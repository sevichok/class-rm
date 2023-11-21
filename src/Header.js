import React, { Component } from 'react'

export class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: this.props.page,
            characters: this.props.characters
        }
    }
    render() {
        return (
            <div className='header'>
                <h1>Simple react-class-app</h1>
                <h4>Page: {this.props.page}</h4>
                <h4>Length: {this.props.characters.length}</h4>
            </div>
        )
    }
}

export default Header