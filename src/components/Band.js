import React, { Component } from "react";
import { connect } from "react-redux";

class Band extends Component {
  render() {
    return (
      <div>
        <li>{this.props.band.name}</li>
        <button onClick={() => this.props.deleteBand(this.props.band.id)}>
          DELETE
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteBand: id => {
      return dispatch({ type: "DELETE_BAND", id });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Band);
