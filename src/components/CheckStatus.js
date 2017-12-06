import React,{ Component } from 'react'
import {reportType} from '../initialState.json'

class ReportOutage extends Component {
		constructor(props) {
		super(props)

		this.state = {
			route : "/",
			options: [
			{
				addressStatus: false,
				phoneStatus: false,
				confNoStatus: true
			}
		]
		}
	}

submit = (event) => {
		event.preventDefault()
		this.setState({route:event.target.outage.value});
		
	}
render(){
  console.log(`here..{reportType==="Address"}`)
	let _addressReport,_phoneReport,_addressStatus,_phoneStatus,_confNoStatus
    return (
      <div className="container-fluid PADD20PX">
			
			<form onSubmit={this.submit} className="report-trouble-form">

			<div className="row">
				<div className="section_title col">Check Trouble Status</div>
			</div>
			<div className="row">
					<label>
						<input type="radio" name="outage" value="addressStatus" defaultChecked={reportType==="Address"} ref={input =>_addressStatus =input}/>By Address
					</label>
			</div>
			<div className="row">
					<label>
						<input type="radio" name="outage" value="phoneStatus" defaultChecked={reportType==="Phone"} ref={input =>_phoneStatus =input} />By Phone Number
					</label>
			</div>
			<div className="row">
					<label>
						<input type="radio" name="outage" value="confNoStatus" defaultChecked={reportType==="ConfNo"} ref={input =>_confNoStatus =input} />By Confirmation Number
						<br/>
						<input type="text" name="confNo"/>
					</label>

			</div>
			<div className="row">
				<div className="col"><button>Check Status</button></div>
			</div>
			</form>
			</div>
    )
  }
}

function mapStateToProps (state) {
  const { step, links, address } = state
  console.log('step is status mapto is '+step)
  return {
    step
  }
}

export default connect(mapStateToProps)(ReportOutage)
