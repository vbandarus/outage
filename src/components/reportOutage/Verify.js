import React, { Component } from 'react'
import { connect } from 'react-redux'
import C from '../../constants.js'
// import rootReducer, { reportOutage, reportType } from '../../reducers'
import {submitOutage } from '../../actions.js'

class Verify extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    console.log("click values are ", e.target)
    e.preventDefault()
    this.props.dispatch(submitOutage(7))
  }

  render() {
    const { addressLine1, addressLine2, zipcode, showError,contactInfo,phoneNumber } = this.props
    return (
      <div className="container-fluid PADD20PX">
        <div className="row">
          <div className="section_title col">Verify Info</div>
        </div>
        <div>Please verify all the details before submitting the outage</div>
        <form onSubmit={this.handleSubmit}>
        <div>Address: {addressLine1} {addressLine2} {zipcode} {phoneNumber}</div>
          <div className="PADDL20PX">
            {contactInfo.firstName}
            {contactInfo.lasttName}
            {contactInfo.contactPhone}
          </div>
          <div className="col"><button>Submit</button></div>
          </form>
      </div>
    )
  }

}
function mapStateToProps(state) {
  console.log('verify state ', state)
  const { parsedAddress, serverError,step ,contactInfo} = state
  const { addressLine1, addressLine2, zipcode,phoneNumber, showError } = parsedAddress
  return {
    addressLine1,
    addressLine2,
    zipcode,
    phoneNumber,
    contactInfo,
    showError,
    step
  }
}

export default connect(mapStateToProps)(Verify)