import React, { Component } from 'react'

export default class Pai extends Component {
  render() {
    return (
      <div>
        <hr/>
        <h1>{this.props.nome} {this.props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {React.Children.map(this.props.children, child => {
              return React.cloneElement(child, {
                ...this.props, ...child.props
              })
            })}


            {/* {this.props.children} */}
            {/* Clonando um único elemento
            {React.cloneElement(this.props.children, {...this.props, ...this.props.children.props})} 
            */}
        </ul>
      </div>
    )
  }
}

