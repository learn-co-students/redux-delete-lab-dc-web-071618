import React, { Component } from "react";

class Band extends Component {
  render() {
    return (
      <li key={this.props.band.id}>
        {this.props.band.name}
        <button onClick={() => this.props.deleteBand(this.props.band.id)}>
          X
        </button>
      </li>
    );
  }
}

export default Band;
