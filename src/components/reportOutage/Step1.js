import React, { Component } from 'react'
import { connect } from 'react-redux'
import C from '../../constants.js'
import rootReducer from '../../reducers'
import { selectReportType, stepChange, parseAddress, addressLookup, decrementStep } from '../../actions.js'
// import initialState from '../../initialState.json'

class Step1 extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeTab = this.handleChangeTab.bind(this)
    this.stepBack = this.stepBack.bind(this)
  }
  stepBack(e) {
    e.preventDefault()
    console.log("reduce step by 1")
    this.props.dispatch(decrementStep(this.props.step))
  }
  handleChangeTab(e) {
    const { title: key } = e.target
    console.log("click values are ", key)
    this.props.dispatch(selectReportType(key))
  }
  handleChange(e) {
    const { id: key, value } = e.target
    console.log(e.target.value, key, value)
    this.props.dispatch(parseAddress(key, value))
  }
  handleSubmit(e) {
    const { step, reportType } = this.props
    e.preventDefault()
    let formData = {
      addressLine1: '',
      addressLine2: '',
      zipcode: '',
      phoneNumber: ''
    }
    if (reportType == "addressReport") {
      formData.addressLine1 = e.target.addressLine1.value
      formData.addressLine2 = e.target.addressLine2.value
      formData.zipcode = e.target.zipcode.value
      console.table(formData)
    } else {
      formData.phoneNumber = e.target.phoneNumber.value
      console.table(formData)
    }
    //setting the set to 2, need to remove Step2, as step1 refitted with step2
    //step 2 can be re-used for address selection screen
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
    }], 1))
  };
  render() {
    const { step, reportType, parsedAddress } = this.props
    const {addressLine1,addressLine2,addressLine3,city,zipcode,phoneNumber} = parsedAddress
    let st = JSON.stringify(step)
    console.log('outage step1 render state ', typeof (st))
    return (
      <div className="container-fluid PADD20PX">
        <div className="row">
          <div className="section_title col"><span>Report a New Location</span></div>
        </div>
        <form className="report-trouble-form center-950px-block" onSubmit={this.handleSubmit}>
          <div className="formContent PADDBOX dte-white-bkg">
            <div className="row">
              <div className="col-xs-12 col-md-6 col-xs-offset-0 col-md-offset-3">Enter the information of the location where you are experiencing a power problem.</div>
            </div>
            <div className="row">
              <div className="nav nav-pills col-xs-12 col-md-6 col-xs-offset-0 col-md-offset-3 PADD0">
                <div className={reportType == "addressReport" ? ("col-xs-6 active") : "col-xs-6"}>
                  <a data-toggle="tab" href="#addressReport" title="addressReport" onClick={this.handleChangeTab}>Report By Address</a></div>
                <div className={reportType == "phoneReport" ? "col-xs-6 active" : "col-xs-6"}>
                  <a data-toggle="tab" href="#phoneReport" title="phoneReport" onClick={this.handleChangeTab}>Report By Phone</a></div>
              </div>
            </div>
            <div className="row">
              <div className="tab-content PADD20PX text-centered col-xs-12 col-md-6 col-xs-offset-0 col-md-offset-3">
                <div id="addressReport" className={reportType == "addressReport" ? "tab-pane fade in PADD20PX active":"tab-pane fade in PADD20PX"}>
                  <div className=" col-xs-12 col-md-offset-3 col-md-6">
                    <label htmlFor="addressLine1">
                      Street Number
								<input type="text" name="addressLine1" onChange={this.handleChange} className='form-control' id='addressLine1' value={addressLine1} placeholder='123 Sample Street'
                      />
                    </label>
                  </div>
                  <div className=" col-xs-12 col-md-offset-3 col-md-6">
                    <label htmlFor="addressLine2">
                      Unit Type
                <input type="text" placeholder="Apt" name="addressLine2" onChange={this.handleChange} className='form-control' id='addressLine2' value={addressLine2} />
                    </label>
                  </div>
                  <div className=" col-xs-12 col-md-offset-3 col-md-6">
                    <label htmlFor="addressLine3">
                      Unit Number
								<input type="text" placeholder="123" name="addressLine3" onChange={this.handleChange} className='form-control' id='addressLine3' value={addressLine3} />
                    </label>
                  </div>
                  <div className=" col-xs-12 col-md-offset-3 col-md-6">
                    <label htmlFor="city">
                      City
								<input type="text" placeholder="City" name="city" onChange={this.handleChange} className='form-control' id='city' value={city} />
                    </label>
                  </div>
                  <div className=" col-xs-12 col-md-offset-3 col-md-6">
                    <label htmlFor="state">
                      State
								<input type="text" placeholder="Apt 123" name="state" readOnly className='form-control' id='state' value="Michigan" />
                    </label>
                  </div>
                  <div className=" col-xs-12 col-md-offset-3 col-md-6">
                    <label htmlFor="zipcode">
                      Zip code
								<input type="text" placeholder="48123" onChange={this.handleChange} className='form-control' id='zipcode' value={zipcode} />
                    </label>
                  </div>
                </div>
                <div id="phoneReport" className={reportType == "phoneReport" ? "tab-pane fade in PADD20PX active":"tab-pane fade in PADD20PX"}>
                  <div className=" col-xs-12 col-md-offset-3 col-md-6">
                    <label htmlFor="phoneNumber">
                      <input type="text" placeholder="2484565461" onChange={this.handleChange} className='form-control' id='phoneNumber'value={phoneNumber} />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="row PADDBOX">
              <div className="col-xs-12">
                <div className="pull-left"><button type="cancel" onClick={this.stepBack}>Back</button></div>
                <div className="pull-right"><button type="submit">Search</button></div>
              </div>
            </div>

        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    step: state.step,
    parsedAddress: state.parsedAddress,
    reportType: state.reportType
  }
}

export default connect(mapStateToProps)(Step1)
