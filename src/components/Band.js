import React, { Component } from 'react';

class Band extends Component {

  handleOnDeleteClick = (event) => {

  }

  render() {
    return(
      <div>
        <li>
        {this.props.band.name}<button onClick={() => this.props.deleteBand(this.props.band.id)}>Delete</button>
        </li>
      </div>
    );
  }
};

export default Band;
