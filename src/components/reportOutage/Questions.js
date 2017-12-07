import React, { Component } from 'react'
import { connect } from 'react-redux'
import C from '../../constants.js'
// import rootReducer, { reportOutage, reportType } from '../../reducers'
import { stepChange, verifyAction } from '../../actions.js'

class Questions extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    console.log("click values are ", e.target)
    e.preventDefault()
    this.props.dispatch(stepChange(6))
  }

  render() {
    const { addressLine1, addressLine2, zipcode, showError,contactInfo,phoneNumber } = this.props
    return (
      <div className="container-fluid PADD20PX">
        <div className="row">
          <div className="section_title col">Questions</div>
        </div>
        <div>This is the questions page based on the previous page scenarios</div>
        <form onSubmit={this.handleSubmit}>
        <div>Address: {addressLine1},{addressLine2},{zipcode}</div>
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
  const { addressLine1, addressLine2, zipcode, showError,phoneNumber } = parsedAddress
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

export default connect(mapStateToProps)(Questions)