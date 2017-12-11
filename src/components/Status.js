import React,{ Component } from 'react'
import { connect } from 'react-redux'
import {reportType} from '../initialState.json'
import '../stylesheets/outage.css'
import '../stylesheets/static-proj.css'

import C from '../constants.js'
import {selectReportType} from '../actions.js'

class Status extends Component {
    constructor(props) {
    super(props)
     this.handleConfirmLookUp = this.handleConfirmLookUp.bind(this);
  }
handleConfirmLookUp(event){
  let type = event.target.value
  let reID = type+"Value"
  $('input[type="text"]').addClass('hidden')
  $('.'+reID).removeClass('hidden')
 console.log(JSON.stringify(nxtState)) 
 const nxtState =  selectReportType("Address",3)
 console.log(JSON.stringify(nxtState))
}
submit(event){
    event.preventDefault()
    this.setState({route:event.target.outage.value});
    
  }

render(){
  const {step} = this.props
    return (
      <div className="container-fluid PADD20PX">      
      <div className="row">
        <div className="section_title col-xs-12">Status Page</div>
      <form onSubmit={this.submit} className="report-trouble-form col-xs-12">
      <div className="PADD20PX">
      <div className="col-xs-12" onClick={this.handleConfirmLookUp}>
      <input type="radio" value="address" name="statusLookup" defaultChecked={reportType==="Address"}/><div>By Address</div>
      <input type="text" className="addressValue hidden" name="addressValue" placeholder="123 Apple"/>
      </div>
      <div className="col-xs-12" onClick={this.handleConfirmLookUp}>
      <input type="radio" value="phone" name="statusLookup" defaultChecked={reportType==="Phone"}/><div>By Phone Number</div>
      <input type="text" className="phoneValue hidden" name="phoneValue" placeholder="1234567890"/>
      </div><div className="col-xs-12" onClick={this.handleConfirmLookUp}>
      <input type="radio" value="confirmNo" name="statusLookup" defaultChecked={reportType==="ConfNo"}/><div>By Confirmation#</div>
       <input type="text" className="confirmNoValue hidden" name="confirmNoValue" placeholder="1231223123"/>
      </div>
      </div>
      </form>
      </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log('thisInit Status ',state)
  return {
    step: state.step
  }
}

export default connect(mapStateToProps)(Status)
