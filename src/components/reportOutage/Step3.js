import React, { Component } from 'react'
import { connect } from 'react-redux'
import C from '../../constants.js'
import rootReducer from '../../reducers'
import { stepChange, selectOutageType } from '../../actions.js'

class Step3 extends Component {
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleClick = this.handleClick.bind(this)
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
		 this.props.dispatch(stepChange(step+1))
	}
	handleClick(e) {
		const { step } = this.props.appState
		const {name: key, value} = e.target
		console.log(key,value)
		this.props.dispatch(selectOutageType(key,JSON.parse(value)))
	}
	render() {
		const { addressLine1, addressLine2, zipcode } = this.props.appState.parsedAddress
		console.log(this.props)
		return (
			<div className="container-fluid PADD20PX">
				<div className="row">
					<div className="section_title col">Step 3</div>
				</div>
				<div>You are reporting trouble at the following location: {addressLine1} {addressLine2} {zipcode}</div>
				<form onSubmit={this.handleSubmit} className="report-trouble-form">
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
					<div className="col"><button>Submit</button></div>
				</form>
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log('outage step3 state ', state)
	return {
		appState: state
	}
}

export default connect(mapStateToProps)(Step3)