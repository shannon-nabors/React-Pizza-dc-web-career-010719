import React, { Component } from "react"

class PizzaForm extends Component {

  render() {
    let {topping, size, vegetarian} = this.props.pizza
    return(
        <div className="form-row">
        
          {/* Topping input */}
          <div className="col-5">
            <input
              type="text"
              className="form-control"
              value={topping}
              placeholder="Pizza Topping"
              name="topping"
              onChange={(e) => this.props.handleFormChange(e)}/>
          </div>

          {/* Size dropdown */}
          <div className="col">
            <select
              name="size"
              value={size}
              className="form-control"
              onChange={(e) => this.props.handleFormChange(e)}>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>

          {/* Vegetarian toggle */}
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="vegetarian" value={true} checked={vegetarian === "true" || vegetarian === true ? true : false} onChange={(e) => this.props.handleFormChange(e)}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="vegetarian" value={false} checked={vegetarian === "false" || vegetarian === false ? true : false} onChange={(e) => this.props.handleFormChange(e)}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={(e) => this.props.handleSubmit(e)}>Submit</button>
          </div>

        </div>
    )
  }
}

export default PizzaForm
