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
              <hr></hr>
              <p className="text" style={{ 'fontWeight': 'italic', 'color': '#7DAFB8' }}> tracking d.mellitus inside us </p>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default Bubbles