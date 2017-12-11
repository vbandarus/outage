import React, { Component } from 'react'
import { connect } from 'react-redux'
import C from '../../constants.js'
// import rootReducer, { reportOutage, reportType } from '../../reducers'
import { stepChange, verifyAction , decrementStep } from '../../actions.js'

class Questions extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
		this.stepBack = this.stepBack.bind(this)
	}
	stepBack(e) {
		e.preventDefault()
		console.log("reduce step by 1")
		this.props.dispatch(decrementStep(this.props.step))
	}
  handleSubmit(e) {
    console.log("click values are ", e.target)
    e.preventDefault()
    this.props.dispatch(stepChange(6))
  }

  render() {
    const { addressLine1, addressLine2, zipcode, showError, contactInfo, phoneNumber } = this.props
    return (
      <div className="container-fluid PADD20PX">
        <div className="center-950px-block">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="section_title"><span>Questions</span></div>
            </div>
            <div className="PADDBOX dte-white-bkg">
              <div>This is the questions page based on the previous page scenarios</div>

              <div>Address: {addressLine1},{addressLine2},{zipcode}</div>
              <div className="PADDL20PX">
                {contactInfo.firstName}
                {contactInfo.lasttName}
                {contactInfo.contactPhone}
              </div>
            </div>
            <div className="row PADDBOX">
							<div className="col-xs-12">
								<div className="pull-left"><button type="cancel" onClick={this.stepBack}>Back</button></div>
								<div className="pull-right"><button type="submit">Continue</button></div>
							</div>
						</div>
          </form>
        </div>
      </div>
    )
  }

}
function mapStateToProps(state) {
  console.log('verify state ', state)
  const { parsedAddress, serverError, step, contactInfo } = state
  const { addressLine1, addressLine2, zipcode, showError, phoneNumber } = parsedAddress
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