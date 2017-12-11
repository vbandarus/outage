import React, { Component } from 'react'
import { connect } from 'react-redux'
import C from '../../constants.js'
import rootReducer from '../../reducers'
import { stepChange, selectOutageType, decrementStep } from '../../actions.js'

class Step3 extends Component {
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.stepBack = this.stepBack.bind(this)
	}
	stepBack(e) {
		e.preventDefault()
		console.log("reduce step by 1")
		this.props.dispatch(decrementStep(this.props.step))
	}
	handleSubmit(e) {
		e.preventDefault()
		const { step } = this.props.appState
		let powerOut = e.target.powerOut.value
		let wireDown = e.target.wireDown.value
		let flickerLights = e.target.flickerLights.value
		let partialOutage = e.target.partialOutage.value
		console.log("outageType ", powerOut,
			wireDown,
			flickerLights,
			partialOutage)
		this.props.dispatch(stepChange(step + 1))
	}
	handleClick(e) {
		const { step } = this.props.appState
		const { name: key, value } = e.target
		console.log(key, value)
		this.props.dispatch(selectOutageType(key, JSON.parse(value)))
	}
	render() {
		const { addressLine1, addressLine2, zipcode } = this.props.appState.parsedAddress
		console.log(this.props)
		return (
			<div className="container-fluid PADD20PX">
				<div className="center-950px-block">
					<div className="row">
						<div className="section_title col">Step 3</div>
					</div>

					<form onSubmit={this.handleSubmit} className="report-trouble-form">
						<div className="PADDBOX dte-white-bkg">
							<div>You are reporting trouble at the following location: {addressLine1} {addressLine2} {zipcode}</div>
							<div className="col">
								<label htmlFor="powerOut">
									<div id="powerOut">power Out
									<input type="radio" name="powerOut" value="true" onClick={this.handleClick} />yes
									<input type="radio" name="powerOut" value="false" onClick={this.handleClick} />no
									</div>
								</label>
							</div>
							<div className="col">
								<label htmlFor="wireDown">
									<div id="wireDown">wire Down
									<input type="radio" name="wireDown" value="true" onClick={this.handleClick} />yes
									<input type="radio" name="wireDown" value="false" onClick={this.handleClick} />no
									</div>
								</label>
							</div>
							<div className="col">
								<label htmlFor="flickerLights">
									<div id="flickerLights">flick Lights
									<input type="radio" name="flickerLights" value="true" onClick={this.handleClick} />yes
									<input type="radio" name="flickerLights" value="false" onClick={this.handleClick} />no
									</div>
								</label>
							</div>
							<div className="col">
								<label htmlFor="partialOutage">
									<div id="partialOutage">partial Outage
									<input type="radio" name="partialOutage" value="true" onClick={this.handleClick} />yes
									<input type="radio" name="partialOutage" value="false" onClick={this.handleClick} />no
									</div>
								</label>
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
	console.log('outage step3 state ', state)
	return {
		appState: state,
		step: state.step
	}
}

export default connect(mapStateToProps)(Step3)