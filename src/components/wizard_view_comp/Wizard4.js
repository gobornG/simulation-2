import React, { Component } from 'react';
import StepProgress0 from '../../img/svg/circle-progress-0.svg';
import StepProgress1 from '../../img/svg/circle-progress-1.svg';
import StepProgress2 from '../../img/svg/circle-progress-2.svg';
import { Link, Route } from 'react-router-dom';

export default class Wizard4 extends React.Component {
  render() {
    return (
      <div className="wizard-view-container">
        <div className="input-container">
        <span className="step-tag"> Step 4 </span>
        <div className="StepHighlight__container">
          <img src ={StepProgress2} />
          <img src ={StepProgress2} />
          <img src ={StepProgress2} />
          <img src ={StepProgress1} />
          <img src ={StepProgress0} />
        </div>
        <form>
        

        <div className="form-label">Loan Amount</div>
              <input className="wizard-input-long" type = "text" />

        <div className="form-label">Monthly Mortage</div>
              <input className="wizard-input-long" type = "text" />



        
        <div className="step__btn_container">
            <button className="drk-btn"><Link to="/wizard/3"> Previous Step </Link> </button>
            <button className="drk-btn"><Link to="/wizard/5"> Next Step </Link> </button>
        </div>
             
        </form>
        </div>
      </div>
    );
  }
}