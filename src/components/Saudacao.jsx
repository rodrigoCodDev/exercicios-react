import React, { Component } from 'react'

export default class Saudacao extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tipo: "Olá",
            nome: "codDev"
        }

        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)
    }

    setTipo(e) {
        this.setState({tipo: e.target.value})
    }

    setNome(e) {
        this.setState({nome: e.target.value})
    }

    render () {
        const { tipo, nome } = this.state
        return (
            <div>
                <hr/>
                <h1>Mensagem: {tipo} {nome}!</h1>
                <hr/>
                <input type='text' placeholder='Tipo...' value={tipo} onChange={this.setTipo}/>
                <input type='text' placeholder='Nome...' value={nome} onChange={this.setNome}/>
            </div>
        )
    }
}