import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      age: "",
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactoreFree: false
    };

    // bind handlers
    this.handleClick = this.handleClick.bind(this);
  }

  // create handlers

  handleClick(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({
          [name]: value
        });
  }

  render() {
    return (
      <main>
        <form>
          <label>
            First Name:
            <input
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleClick}
              placeholder="Enter First name"
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleClick}
              placeholder="Enter Last name"
            />
          </label>
          <br />
          <label>
            Age:
            <input
              name="age"
              value={this.state.age}
              onChange={this.handleClick}
              placeholder="Enter your age"
            />
          </label>
          <br />
          <label>
            Male:
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleClick}
            />
          </label>
          <br />
          <label>
            Female:
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleClick}
            />
          </label>
          <br />
          <label>
            Destination:
            <select
              name="destination"
              value={this.state.destination}
              onChange={this.handleClick}
            >
              <option value=" ">Please choose your destination</option>
              <option value="christchurch">Christchurch</option>
              <option value="wellington">Wellington</option>
              <option value="napier">Napier</option>
              <option value="queenstown">Queenstown</option>
            </select>
          </label>
          <br />
          {/* <label>Dietary Requirements:</label>
          <br /> */}
          <label>
            <input
              type="checkbox"
              name="isVegan"
              onchange={this.handleClick}
              checked={this.state.isVegan}
            />
            Vegan?
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="isKosher"
              onchange={this.handleClick}
              checked={this.state.isKosher}
            />
            Kosher?
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              onchange={this.handleClick}
              checked={this.state.isLactoseFree}
            />
            Lactose Free?
          </label>
          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.firstname} {this.state.lastname}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
          Your dietary restrictions: Vegan: {this.state.isVegan}
          Kosher: {this.state.isKosher}
          Lactose Free: {this.state.isLactoreFree}
        </p>
      </main>
    );
  }
}

export default App;
