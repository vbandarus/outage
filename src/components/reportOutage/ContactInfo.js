import React, { Component } from 'react'
import { connect } from 'react-redux'
import C from '../../constants.js'
// import rootReducer, { reportOutage, reportType } from '../../reducers'
import { stepChange, parseAddress, addressLookup, contactInfo ,decrementStep } from '../../actions.js'

class contactInfoClass extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
		this.stepBack = this.stepBack.bind(this)
	}
	stepBack(e) {
		e.preventDefault()
		console.log("reduce step by 1")
		this.props.dispatch(decrementStep(this.props.step))
	}
  handleSubmit(e) {
    const { step } = this.props
    console.log("click values are ", e.target)
    e.preventDefault()
    const firstName = e.target.firstName.value
    const lastName = e.target.lastName.value
    const contactPhone = e.target.contactPhone.value
    const contactInfoVal = { firstName, lastName, contactPhone }
    console.log(contactInfoVal)
    this.props.dispatch(contactInfo(contactInfoVal, step))
  }
  handleChange(e) {
    //const {id: key, value} = event.target
    console.log("click values are ", e.target.value)
    //this.props.dispatch(parseAddress(key, value))
  }
  render() {
    const { addressLine1, addressLine2, zipcode, showError, phoneNumber } = this.props
    return (
      <div className="container-fluid PADD20PX">
        <div className="center-950px-block">
          <div className="row">
            <div className="section_title col"><span>Contact Info</span></div>
          </div>

          <form onSubmit={this.handleSubmit} className="contactInfo">
            <div className="PADDBOX dte-white-bkg">
              <div>We may need to reach you regarding your power problem.Please provide your contact information below:</div>
              <div>Reporting outage for the below address</div>
              <div>Address: {addressLine1} {addressLine2} {zipcode} {phoneNumber}</div>
              <div className="PADDL20PX">
                <label htmlFor="firstName" className="formLabel font-regular">
                  First Name</label>
                <input type="text" name="firstName" size="30" onChange={this.handleChange} id="firstName" />
              </div>
              <div className="PADDL20PX"><label htmlFor="lastName" className="formLabel font-regular">Last Name</label>
                <input type="text" name="lastName" size="30" onChange={this.handleChange} id="lastName" />
              </div>
              <div className="PADDL20PX"><label htmlFor="contactPhone" className="formLabel font-regular">Phone Number</label>
                <input type="text" name="contactPhone" size="10" onChange={this.handleChange} id="contactPhone" />
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
      </div>
    )
  }

}
function mapStateToProps(state) {
  console.log('outage step2 state ', state)
  const { parsedAddress, serverError, step } = state
  const { addressLine1, addressLine2, zipcode, showError, phoneNumber } = parsedAddress
  return {
    addressLine1,
    addressLine2,
    zipcode,
    phoneNumber,
    showError,
    step
  }
}

export default connect(mapStateToProps)(contactInfoClass)