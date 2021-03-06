import React, { Component } from 'react';
import StepProgress0 from '../../img/svg/circle-progress-0.svg';
import StepProgress1 from '../../img/svg/circle-progress-1.svg';
import StepProgress2 from '../../img/svg/circle-progress-2.svg';
import { Link, Route } from 'react-router-dom';
import { POST_NEW_PROPERTY } from '../../actions/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Wizard2 extends React.Component {
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    this.props.POST_NEW_PROPERTY({ 
      address: this.refs.address.value, 
      city: this.refs.city.value,
      state: this.refs.state.value,
      zip: this.refs.zip.value
    }, false);
  }
  render() {
    
    return (
      <div className="wizard-view-container">
         <div className="input-container">
        <span className="step-tag"> Step 2 </span>
        <div className="StepHighlight__container">
          <img src ={StepProgress2} />
          <img className="animateOrb" src ={StepProgress1} />
          <img src ={StepProgress0} />
          <img src ={StepProgress0} />
          <img src ={StepProgress0} />
        </div>
        <form onSubmit={this.handleNext}>
        <div className="form-label">Address</div>
              <input 
                ref="address" 
                className="wizard-input-long" 
                id="address"
                type = "text" 
                value={this.state.address}
                onChange={this.handleInputChange}
                required
              />

        <div className="form-label-combined">
          <div className="form-input-container">
            <div className="form-label">City</div>
            <input 
              ref="city" 
              className="wizard-input-short" 
              id="city"
              type="text" 
              value={this.state.city}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-input-container">
            <div className="form-label">State</div>
            <input
              ref="state"  
              className="wizard-input-short" 
              id="State"
              type="text"
              value={this.state.State}
              onChange={this.handleInputChange}
              required
            />
          </div>
        </div>  
 
        <div className="form-label">Zip</div>
              <input 
                ref="zip" 
                className="wizard-input-short"
                id="zip"
                type="number" 
                value={this.state.zip}
                onChange={this.handleInputChange}
                required
                />   
        <div className="step__btn_container">
            <Link to="/wizard/1"><button type="submit" className="drk-btn">Previous Step</button></Link>
            <button type="submit" onClick={() => {this.submit()}} className="drk-btn"> <Link to="/wizard/3"> Next Step </Link> </button>
        </div>
             
        </form>
        </div>
        
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ POST_NEW_PROPERTY}, dispatch)
}

export default connect(null, mapDispatchToProps)(Wizard2);
