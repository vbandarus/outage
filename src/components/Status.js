import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reportType } from '../initialState.json'
import '../stylesheets/outage.css'
import '../stylesheets/static-proj.css'

import C from '../constants.js'
import { selectStatusLookUp,addressLookup,parseAddress, stepChange } from '../actions.js'

class Status extends Component {
  constructor(props) {
    super(props)
    this.handleChangeTab = this.handleChangeTab.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChangeTab(e) {
    const { title: key, value } = e.target
    // const myPropTypes = {
    //   name: PropTypes.string,
    //   age: PropTypes.number
    // };
    // const props = {
    //   name: 'hello', // is valid
    //   age:'world' // not valid
    // };
    // console.log("###prop types...",PropTypes.checkPropTypes((myPropTypes, props, 'prop', 'Status')))
    // if(PropTypes.checkPropTypes((myPropTypes, props, 'prop', 'Status'))){
      this.props.dispatch(selectStatusLookUp(key))
  // }
}
  handleChange(e) {
    const { id: key, value } = e.target
    console.log(e.target.value, key, value)
    const myPropTypes = {
      name: PropTypes.string,
      age: PropTypes.number
    };
    const props = {
      name: 'hello', // is valid
      age:855 // not valid
    };
    console.log("###prop types...",PropTypes.checkPropTypes((Status.defaultProps, props, 'prop', 'Status')))
    if(PropTypes.checkPropTypes((myPropTypes, props, 'prop', 'Status'))){
      this.props.dispatch(parseAddress(key, value))
  }
   
  }
  handleSubmit(e) {
    const { step } = this.props
    e.preventDefault()
    PropTypes.checkPropTypes()
    console.log('status step change')
    if(this.props.statusLookUp!="confirmLookup"){
    this.props.dispatch(addressLookup([{
      "addressLine1": '129 Apple',
      "addressLine2": ' Apes Road',
      "zipcode": 98745,
      "premiseID": 12313,
      "dnpFlag": false,
      "troubleID": ''
    },
    {
      "addressLine1": '147 Apple Ct',
      "addressLine2": ' Apes Road',
      "zipcode": 98745,
      "premiseID": 12323,
      "dnpFlag": false,
      "troubleID": 132789
    },
    {
      "addressLine1": '111 Apple',
      "addressLine2": ' Apes Road',
      "zipcode": 98745,
      "premiseID": 12333,
      "dnpFlag": true,
      "troubleID": ''
    },
    {
      "addressLine1": '114 Apple',
      "addressLine2": ' Apes Road',
      "zipcode": 98745,
      "premiseID": 12393,
      "dnpFlag": true,
      "troubleID": 132789
    }], 1))}else{
      this.props.dispatch(stepChange(3))
    }
    // this.props.history.push('/pltr');

  }

  render() {
    const { statusLookUp, parsedAddress } = this.props
    const { addressLine1, addressLine2, addressLine3, city, zipcode, phoneNumber } = parsedAddress
    return (
      <div className="container-fluid grid-950px PADD20PX">
        <div className="row">
          <div className="section_title col"><span>Status Lookup</span></div>
        </div>
        <form className="report-trouble-form center-950px-block" onSubmit={this.handleSubmit}>
          <div className="formContent PADDBOX dte-white-bkg">
            <div className="row">
              <div className="col-xs-10 col-md-6 col-xs-offset-1 col-md-offset-3">Enter the information of the location to check status of outage.</div>
            </div>
            <div className="row">
              <div className="nav nav-pills col-xs-10 col-md-6 col-xs-offset-1 col-md-offset-3 PADD0">
                <div className={statusLookUp == "addressLookup" ? ("col-xs-4 active") : "col-xs-4"}>
                  <a data-toggle="tab" href="#addressLookup" title="addressLookup" onClick={this.handleChangeTab}>Address</a></div>
                <div className={statusLookUp == "phoneLookup" ? "col-xs-4 active centerTab" : "col-xs-4 centerTab"}>
                  <a data-toggle="tab" href="#phoneLookup" title="phoneLookup" onClick={this.handleChangeTab}>Phone</a></div>
                <div className={statusLookUp == "confirmLookup" ? "col-xs-4 active" : "col-xs-4"}>
                  <a data-toggle="tab" href="#confirmLookup" title="confirmLookup" onClick={this.handleChangeTab}>Confirmation</a></div>
              </div>
            </div>
            <div className="row">
              <div className="tab-content PADD20PX text-centered col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-6 ">
                <div id="addressLookup" className={statusLookUp == "addressLookup" ? "tab-pane fade in PADD20PX active" : "tab-pane fade in PADD20PX"}>
                  <div className=" col-xs-12 col-md-offset-3 col-md-9">
                    <div className="row">
                      <label htmlFor="addressLine1" className="col-xs-12 col-lg-12">Street Number
                    <input type="text" placeholder='123 Sample Street' name="addressLine1" onChange={this.handleChange} className='form-control' id='addressLine1' value={addressLine1} />
                      </label>
                    </div>
                  </div>
                  <div className=" col-xs-12 col-md-offset-3 col-md-9">
                    <div className="row">
                      <label htmlFor="addressLine2" className="col-xs-12 col-lg-12">Unit Type
                    <input type="text" placeholder="Apt" name="addressLine2" onChange={this.handleChange} className='form-control' id='addressLine2' value={addressLine2} />
                      </label>
                    </div>
                  </div>
                  <div className=" col-xs-12 col-md-offset-3 col-md-9">
                    <div className="row">
                      <label htmlFor="addressLine3" className="col-xs-12 col-lg-12">Unit Number
                    <input type="text" placeholder="123" name="addressLine3" onChange={this.handleChange} className='form-control' id='addressLine3' value={addressLine3} />
                      </label>
                    </div>
                  </div>
                  <div className=" col-xs-12 col-md-offset-3 col-md-9">
                    <div className="row">
                      <label htmlFor="city" className="col-xs-12 col-lg-12">City
                    <input type="text" placeholder="City" name="city" onChange={this.handleChange} className='form-control' id='city' value={city} />
                      </label>
                    </div>
                  </div>
                  <div className=" col-xs-12 col-md-offset-3 col-md-9">
                    <div className="row">
                      <label htmlFor="state" className="col-xs-12 col-lg-12">State
                    <input type="text" placeholder="Apt 123" name="state" readOnly className='form-control' id='state' value="Michigan" />
                      </label>
                    </div>
                  </div>
                  <div className=" col-xs-12 col-md-offset-3 col-md-9">
                    <div className="row">
                      <label htmlFor="zipcode" className="col-xs-12 col-lg-12">Zip code
                    <input type="text" placeholder="48123" onChange={this.handleChange} className='form-control' id='zipcode' value={zipcode} />
                      </label>
                    </div>
                  </div>
                </div>
                <div id="phoneLookup" className={statusLookUp == "phoneLookup" ? "tab-pane fade in PADD20PX active" : "tab-pane fade in PADD20PX"}>
                  <div className=" col-xs-12 col-md-offset-3 col-md-9">
                    <label htmlFor="phoneNumber" className="col-xs-12 col-lg-12">Phone Number
                    <input type="text" placeholder="2484565461" onChange={this.handleChange} className='form-control' id='phoneNumber' value={phoneNumber} />
                    </label>
                  </div>
                </div>
                <div id="confirmLookup" className={statusLookUp == "confirmLookup" ? "tab-pane fade in PADD20PX active" : "tab-pane fade in PADD20PX"}>
                  <div className=" col-xs-12 col-md-offset-3 col-md-9">
                    <label htmlFor="confirmationNo" className="col-xs-12 col-lg-12">Confirmation Number
                    <input type="text" placeholder="2484565461" onChange={this.handleChange} className='form-control' id='confirmationNo' value={phoneNumber} />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row PADDBOX">
            <div className="col-xs-12">
              <div className="pull-left">
                <div className="pull-left">
                  <button type="button btn-rounded" onClick={this.stepBack} className="btn btn-default">Back</button>
                </div>
              </div>
              <div className="pull-right"><button type="submit">Search</button></div>
            </div>
          </div>
        </form>
      </div>
    )
  }
  
}

Status.propTypes = {
  addressLine1: PropTypes.string.isRequired,
  addressLine2: PropTypes.string.isRequired,
  addressLine3: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  phoneNumber: PropTypes.number.isRequired,
  zipcode: PropTypes.number.isRequired
}

Status.defaultProps = {
  addressLine1:"Some Addr",
  addressLine2: "APT",
  addressLine3: "206",
  city: '',
  phoneNumber: 1231231,
  zipcode: 43123
}

function mapStateToProps(state) {
  console.log('thisInit Status ', state)
  return {
    step: state.step,
    parsedAddress: state.parsedAddress,
    statusLookUp: state.statusLookUp
  }
}

export default connect(mapStateToProps)(Status)
