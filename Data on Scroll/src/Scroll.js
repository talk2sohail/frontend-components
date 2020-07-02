import React, { Component } from 'react'
import Message from './Message'
export default class Scroll extends Component {
    render() {
        return (
            <div>
                <p> value of the prop name is {this.props.name}</p>
                <p>the data length is {this.props.dataLength}</p>
                {this.props.children}
                {this.props.hasMore ? this.props.next() : <Message />}
            </div>
        )
    }
}
