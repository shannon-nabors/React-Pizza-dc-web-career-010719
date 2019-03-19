import React, { Component } from "react"

class PizzaForm extends Component {

  render() {
    return(
        <div className="form-row">
          <div className="col-5">
              <input
                type="text"
                className="form-control"
                value={this.props.topping}
                placeholder="Pizza Topping"
                name="topping"
                onChange={(e) => this.props.handleFormChange(e)}/>
          </div>
          <div className="col">
            <select
              name="size"
              value={this.props.size}
              className="form-control"
              onChange={(e) => this.props.handleFormChange(e)}
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="vegetarian" value={true} checked={this.props.vegetarian === "true" || this.props.vegetarian === true ? true : false} onChange={(e) => this.props.handleFormChange(e)}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="vegetarian" value={false} checked={this.props.vegetarian === "false" || this.props.vegetarian === false ? true : false} onChange={(e) => this.props.handleFormChange(e)}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={(e) => this.props.handleSubmit(e)}>Submit</button>
          </div>
        </div>
    )
  }
}

export default PizzaForm
