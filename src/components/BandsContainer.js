import React, { Component } from "react";
import BandInput from "./BandInput";
import Band from "./Band";

import { connect } from "react-redux";

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        {!!this.props.bands
          ? this.props.bands.map(band => (
              <Band
                band={band}
                key={band.id}
                deleteBand={this.props.deleteBand}
              />
            ))
          : null}
      </div>
    );
  }
}

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: band => dispatch({ type: "DELETE_BAND", band })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandsContainer);
