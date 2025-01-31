import React, { Component } from 'react'

export default class Filho extends Component {
    render() {
        return <li>{this.props.nome} {this.props.sobrenome}</li>
    }
}