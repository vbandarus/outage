import React, { Component } from 'react'
import { connect } from 'react-redux'
import C from '../../constants.js'
// import rootReducer, { reportOutage, reportType } from '../../reducers'
import { stepChange, parseAddress, addressLookup, decrementStep } from '../../actions.js'

class Step2 extends Component {
	constructor(props) {
		super(props)
		this.submit = this.submit.bind(this)
		// this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.stepBack = this.stepBack.bind(this)
	}
	stepBack(e) {
		e.preventDefault()
		console.log("reduce step by 1")
		this.props.dispatch(decrementStep(this.props.step))
	}
	handleClick(e) {
		const { id: key, value } = e.target
		console.log(e.target.value, key, value)
		this.props.dispatch(parseAddress(key, value))
	}
	submit(e) {
		const { step, reportType, suggestions } = this.props
		e.preventDefault()
		let formData = {
			addressLine1: '',
			addressLine2: '',
			zipcode: ''
		}
		if (reportType == "addressReport") {
			formData.addressLine1 = "SOme address"
			formData.addressLine2 = "SOme address"
			formData.zipcode = "SOme address"
			console.table(formData)
		} else {
			formData.addressLine1 = "SOme address"
			console.table(formData)
		}
		this.props.dispatch(addressLookup(formData, step))
	};
	render() {
		console.log(this.props)
		const { step, suggestions } = this.props
		const upperHandle = this.handleClick
		console.log("addressSuggestions", suggestions)
		let t = []
		for (var key in suggestions) {
			if (suggestions.hasOwnProperty(key)) {
				const { addressLine1, addressLine2, premiseID } = suggestions[key]
				t.push(
					<div key={premiseID}>
						<input type="radio" onClick={upperHandle} name="selectPremise" key={key} value={premiseID} />
						{addressLine1}{addressLine2}{premiseID}
					</div>)
			}
		}
		return (
			<div className="PADDBOX">
				<div className="row">
					<div className="row">
						<div className="section_title col"><span>Select Premise</span></div>
					</div>
				</div>

				<form className="center-950px-block" onSubmit={this.submit}>
					<div className="PADDBOX dte-white-bkg">
						<div>From the below please pick the address to report an outage</div>
						<div className="formContent">
							<div className="PADDT20PX"><div>{t}</div></div>
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
	console.log('outage step2 state ', state)
	return {
		step: state.step,
		suggestions: state.addressSuggestions
	}
}

export default connect(mapStateToProps)(Step2)


