import React, { Component } from 'react';
import Pizza from '../components/Pizza'


class PizzaList extends Component {
  constructor() {
    super()
    this.state = {pizzas: []}
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
    .then(res => res.json())
    .then(pizzas => this.setState({pizzas}))
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.state.pizzas.map(pz => <Pizza key={pz.id} pizza={pz}/>)}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
