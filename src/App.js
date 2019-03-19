import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      pizzas: [],
      pizza: {id: null, topping: "", size: "", vegetarian: null}
    }
  }

  // PIZZA LIST //
  // Get pizzas on mount
  componentDidMount() {
    fetch("http://localhost:4000/pizzas")
    .then(res => res.json())
    .then(pizzas => this.setState({pizzas}))
  }

  // Callback for "edit pizza" buttons - sets state to selected pizza
  selectPizza = (pizza) => {
    this.setState({
      pizza: {...pizza}
    })
  }

  // PIZZA FORM //
  handleFormChange = (e) => {
    this.setState({
      pizza:{
        ...this.state.pizza,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.updatePizzaInDb()
    this.updatePizzasForList()
    this.resetForm()
  }

  // Helpers for pizza form
  updatePizzaInDb() {
    fetch(`http://localhost:4000/pizzas/${this.state.pizza.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(this.state.pizza)
    })
  }

  updatePizzasForList = () => {
    let newPizzas = [...this.state.pizzas].map(p => {
      return (p.id === this.state.pizza.id ? this.state.pizza : p)
    })
    this.setState({pizzas: newPizzas})
  }

  resetForm = () => {
    this.setState({pizza: {id: null, topping: "", size: "", vegetarian: null}})
  }

  // RENDER //
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
          pizza={this.state.pizza}
          handleFormChange={this.handleFormChange}
          handleSubmit={this.handleSubmit}/>
        <PizzaList
          pizzas={this.state.pizzas}
          selectPizza={this.selectPizza}/>
      </Fragment>
    );
  }
}

export default App;
