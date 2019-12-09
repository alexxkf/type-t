import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';


class Bubbles extends Component {


  render() {
    return (
      <div className="container" id="bubbles">
        <div className="row" style={{ textAlign: 'center', justifyContent: 'center' }}>
          <div className="col-md-4 box"><span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x"></i>
            <Icon className="fa fa-syringe" style={{ fontSize: 60 }} />
          </span>
            <h6>Insulin</h6>
            <p className="text-muted">According to your ratio of 1 unit/mL per 6g/carbs, take NUMBER units/mL</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Bubbles