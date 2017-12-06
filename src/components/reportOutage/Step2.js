import React,{ Component } from 'react'
import { connect } from 'react-redux'
import C from '../../constants.js'
import rootReducer from '../../reducers'
import {stepChange} from '../../actions.js'

class Step2 extends Component  {
		constructor(props) {
		super(props)
		this.submit =  this.submit.bind(this)
	}
 submit(event){
		event.preventDefault()
		this.props.dispatch(stepChange(3))
	};
	render() {
    const {step} = this.props
	if(step==2){
return(
<div className="container-fluid PADD20PX">
	<div className="row">
		<div className="section_title col">Step 2</div>
	</div>
<form onSubmit={this.submit} className="report-step2">
	<div className="col">
	<label htmlFor="addressLine1">
	<input type="text" placeholder="addressLine1" name="addressLine1" value=""/> 
	</label>
	</div>
	<div className="col">
	<label htmlFor="addressLine2">
	<input type="text" placeholder="addressLine2" name="addressLine2" value=""/> 
	</label>
	</div>
	<div className="col">
	<label htmlFor="addressLine3">
	<input type="text" placeholder="addressLine3" name="addressLine3" value=""/> 
	</label>
	</div>
	<div className="col"><button>Submit</button></div>
</form>
</div>
	)
}
}
}

function mapStateToProps (state) {
  console.log('outage step2 state ',state)
  return {
    step: state.step
  }
}

export default connect(mapStateToProps)(Step2)

	
