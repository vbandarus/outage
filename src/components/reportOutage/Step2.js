import React, { Component } from 'react'
import { connect } from 'react-redux'
import C from '../../constants.js'
// import rootReducer, { reportOutage, reportType } from '../../reducers'
import { stepChange, parseAddress, addressLookup } from '../../actions.js'

class Step2 extends Component {
	constructor(props) {
		super(props)
		this.submit = this.submit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(e){
		const {id: key, value} = e.target
		console.log(e.target.value,key,value)
		this.props.dispatch(parseAddress(key,value))
	}
	submit(e) {
		const { step, reportType } = this.props
		e.preventDefault()
		let formData ={
			addressLine1:'',
			addressLine2:'',
			zipcode:'',
			phoneNumber:''
		}
		if(reportType=="addressReport"){
			formData.addressLine1 = e.target.addressLine1.value 
			formData.addressLine2 = e.target.addressLine2.value
			formData.zipcode = e.target.zipcode.value
			console.table(formData)
		}else{
			formData.phoneNumber = e.target.phoneNumber.value
			console.table(formData)
		}
		this.props.dispatch(addressLookup(formData,step))
	};
	render() {
		const { step, reportType } = this.props
		console.log(step, reportType)
		if (reportType == "addressReport") {
			return (
				<div className="container-fluid PADD20PX">
					<div className="col">
						<div className="section_title col">Step 2</div>
					</div>
					<div>
						To report a power problem, please provide the phone number where the outage is located below:
					</div>
					<form onSubmit={this.submit} className="reportStep2">
						<div className="col">
							<label htmlFor="addressLine1">
								<input type="text"
								name="addressLine1" 
								onChange={this.handleChange} 
								//value={addressLine1}
								className='form-control'
								id='addressLine1'
								placeholder='123 Sample Street' 
								/>
							</label>
						</div>
						<div className="col">
							<label htmlFor="addressLine2">
								<input type="text" 
								placeholder="Apt 123" 
								name="addressLine2"
								onChange={this.handleChange} 
								//value={addressLine2}
								className='form-control'
								id='addressLine2' />
							</label>
						</div>
						<div className="col">
							<label htmlFor="zipcode">
								<input type="text" 
								placeholder="48123"
								onChange={this.handleChange} 
								className='form-control'
								id='zipcode' />
							</label>
						</div>
						<div className="col"><button>Submit</button></div>
					</form>
				</div>
			)
		} else {
			return (
				<div className="container-fluid PADD20PX">
					<div className="row">
						<div className="section_title col">Step 2</div>
					</div>
					<form onSubmit={this.submit} className="reportStep2">
						<div className="col">
							<label htmlFor="phoneNumber">
								<input type="text" placeholder="2484565461" 
								onChange={this.handleChange} 
								className='form-control'
								id='phoneNumber' />
							</label>
						</div>
						<div className="col"><button>Submit</button></div>
					</form>
				</div>
			)
		}
	}
}

function mapStateToProps(state) {
	console.log('outage step2 state ', state)
	return {
		step: state.step,
		reportType: state.reportType
	}
}

export default connect(mapStateToProps)(Step2)


