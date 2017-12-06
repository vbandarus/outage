import React,{ Component } from 'react'
import { connect } from 'react-redux'
import C from '../../constants.js'
import rootReducer from '../../reducers'
import {submitOutage} from '../../actions.js'

class Step3 extends Component  {
	constructor(props) {
	super(props)
	this.handleSubmit =  this.handleSubmit.bind(this)
}
handleSubmit(event){
	event.preventDefault()
	this.props.dispatch(submitOutage({
		step:4,
		confirmation: 12345,
		circuitMode: "normal",
		restorationTime: "12/9/2017",
		reportedTime: "12/5/2017"
	}))
}
render() {
	return(
<div className="container-fluid PADD20PX">
	<div className="row">
		<div className="section_title col">Step 3</div>
	</div>
<form onSubmit={this.handleSubmit} className="report-trouble-form">
	<div className="col">
		<label htmlFor="addressLine1">
			<div id="addressLine1">powerOut
				<input type="radio" name="powerOut" value="yes"/>yes
				<input type="radio" name="powerOut" value="no"/>no
			</div>
		</label>
	</div>
	<div className="col">
		<label htmlFor="addressLine2">
			<div id="addressLine2">wireDown
				<input type="radio" name="wireDown" value="yes"/>yes
				<input type="radio" name="wireDown" value="no"/>no
			</div>
		</label>
	</div>
	<div className="col">
		<label htmlFor="addressLine3">
			<div id="addressLine3">flickLights
				<input type="radio" name="flickLights" value="yes"/>yes
				<input type="radio" name="flickLights" value="no"/>no
			</div>
		</label>
	</div>
	<div className="col">
		<label htmlFor="addressLine3">
			<div id="addressLine3">partialOutage
				<input type="radio" name="partialOutage" value="yes"/>yes
				<input type="radio" name="partialOutage" value="no"/>no
			</div>
		</label>
	</div>
	<div className="col"><button>Submit</button></div>
</form>
</div>
	)
}
}

function mapStateToProps (state) {
	console.log('outage step3 state ',state)
	return {
	  step: state.step
	}
  }
  
  export default connect(mapStateToProps)(Step3)