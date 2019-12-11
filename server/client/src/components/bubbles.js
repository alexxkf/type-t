import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import ChooseDays from './dayPicker'



class Bubbles extends Component {


  render() {
    return (
      <div>
        <hr></hr>
        <div className="container" id="bubbles">
          <div className="row" style={{ textAlign: 'center', justifyContent: 'center' }}>
            <div className="col-md-4 box">
              {/* <h6>Insulin</h6>
              <p className="text-muted">According to your ratio of 1 unit/mL per 6g/carbs, take {} units/mL</p> */}
              <hr></hr>
              <p className="text-muted" style={{ fontWeight: 'italic' }}>tracking d.mellitus inside us</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Bubbles