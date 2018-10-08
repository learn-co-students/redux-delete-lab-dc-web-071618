import React, { Component } from "react";
import BandInput from "./BandInput";
import Band from "./Band";

import { connect } from "react-redux";

class BandsContainer extends Component {
  render() {
    console.log("BandsContainer", this.props.bands);
    return (
      <div>
        {this.props.bands.map(band => (
          <Band band={band} deleteBand={this.props.deleteBand} />
        ))}
        <BandInput addBand={this.props.addBand} />
      </div>
    );
  }
}

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({ type: "DELETE_BAND", id })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandsContainer);
