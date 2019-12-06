import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';


class Bubbles extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div className="container">
        <div className="row" style={{ textAlign: 'center', justifyContent: 'center', margin: '40px' }}>
          <div className="col-md-4 box"><span className="fa-stack fa-4x">
            <i class="fa fa-circle fa-stack-2x"></i>
          </span>
            <h6>Current BGL</h6>
            <p className="text-muted">mg/dL</p>
          </div>
          <a href="" className="col-md-4 box"> <span className="fa-stack fa-4x">
            <i class="fa fa-circle fa-stack-2x"></i>
          </span>
            <h6>Add New Tracking</h6>
            <p className="text-muted"></p></a>
          <div className="col-md-4 box"><span className="fa-stack fa-4x">
            <i class="fa fa-circle fa-stack-2x"></i>
            <Icon className="fa fa-syringe" style={{ fontSize: 60 }} />
          </span>
            <h6>Insulin</h6>
            <p className="text-muted">units/mL</p></div>
        </div>
      </div >
    )
  }
}

export default Bubbles