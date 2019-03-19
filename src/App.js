import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      pizzas: [],
      selectedID: null,
      topping: "",
      size: "",
      vegetarian: null
    }
  }

  componentDidMount() {
    fetch("http://localhost:4000/pizzas")
    .then(res => res.json())
    .then(pizzas => this.setState({pizzas}))
  }

  selectPizza = (pizza) => {
    this.setState({
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian,
      selectedID: pizza.id
    })
  }

  updatePizzaInDb() {
    let pizza = this.makePizzaObj()
    fetch(`http://localhost:4000/pizzas/${pizza.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(pizza)
    })
  }

  updatePizzasForList = () => {
    let newPizzas = [...this.state.pizzas].map(p => {
      return (p.id === this.state.selectedID ? this.makePizzaObj() : p)
    })

    this.setState({pizzas: newPizzas})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.updatePizzaInDb()
    this.updatePizzasForList()
    this.resetForm()
  }

  makePizzaObj() {
    return {
      id: this.state.selectedID,
      topping: this.state.topping,
      size: this.state.size,
      vegetarian: this.state.vegetarian
    }
  }

  handleFormChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  resetForm = () => {
    this.setState({
      selectedID: null,
      topping: "",
      size: "",
      vegetarian: null
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
          topping={this.state.topping}
          size={this.state.size}
          vegetarian={this.state.vegetarian}
          handleFormChange={this.handleFormChange}
          handleSubmit={this.handleSubmit}/>
        <PizzaList pizzas={this.state.pizzas} selectPizza={this.selectPizza}/>
      </Fragment>
    );
  }
}

export default App;
