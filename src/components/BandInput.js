import React, { Component } from "react";
// import { connect } from "react-redux";

class BandInput extends Component {
  state = {
    name: ""
  };

  handleOnChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleOnSubmit(event) {
    console.log(this.state.name);
    event.preventDefault();
    this.props.addBand(this.state.name);
    this.setState({
      name: ""
    });
    event.target.reset();
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={event => this.handleOnChange(event)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default BandInput;
