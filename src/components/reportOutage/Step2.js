import React, { Component } from 'react'
import { connect } from 'react-redux'
import C from '../../constants.js'
// import rootReducer, { reportOutage, reportType } from '../../reducers'
import { stepChange, parseAddress, addressLookup, decrementStep,isDNP,isDuplicate } from '../../actions.js'

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
		const { value } = e.target
		const selectedAddr = this.props.suggestions.filter(suggestion => suggestion.premiseID == value);
		console.log(selectedAddr)
		if (selectedAddr.length > 0 && !selectedAddr[0].troubleID) {
			$('button[type="submit"]').removeAttr('disabled')
		} else if (selectedAddr[0].dnpFlag) {
			alert('Disconnected for non pay can only report downed power lines!!!')
			this.props.dispatch(isDNP(true))
		} else if (selectedAddr[0].troubleID) {
			alert('Already an outage is reported do you wnat to report another outage or update contact info..Link')
			this.props.dispatch(isDuplicate(true))
		}
		//this.props.dispatch(parseAddress(key, value))
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
			formData.addressLine1 = "Some address"
			formData.addressLine2 = "Some address"
			formData.zipcode = "Some address"
		} else {
			formData.addressLine1 = "Some address"
		}
		// this.props.dispatch(addressLookup(formData, step))
		this.props.dispatch(stepChange(step + 1))
	};
	render() {
		console.log(this.props)
		const { step, suggestions, enableContinue } = this.props
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
				<form className="center-950px-block grid-950px" onSubmit={this.submit}>
					<div className="row">
						<div className="section_title col"><span>Select Premise</span></div>
					</div>
					<div className="PADDBOX dte-white-bkg">
						<div>From the below please pick the address to report an outage</div>
						<div className="formContent">
							<div className="PADDT20PX"><div>{t}</div></div>
						</div>
					</div>
					<div className="row PADDBOX">
						<div className="col-xs-12">
							<div className="pull-left">
								<button type="button" onClick={this.stepBack} className="btn dte-white-bkg btn-rounded">Back</button>
							</div>
							<div className="pull-right"><button disabled type="submit">Continue</button></div>
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


