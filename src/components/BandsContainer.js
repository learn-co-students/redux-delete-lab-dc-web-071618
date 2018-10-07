import React, { Component } from "react";
import { connect } from "react-redux";

import BandInput from "./BandInput";
import Band from "./Band";

class BandsContainer extends Component {
  render() {
    console.log(this.props.bands);
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.props.bands.map(b => <Band key={b.id} band={b} />)}
      </div>
    );
  }
}

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandsContainer);
