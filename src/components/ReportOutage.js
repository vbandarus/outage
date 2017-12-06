import React,{ Component } from 'react'
import C from '../constants.js'
import { connect } from 'react-redux'
import Step1 from './reportOutage/Step1.js'
import Step2 from './reportOutage/Step2.js'
import Step3 from './reportOutage/Step3.js'
import Confirm from './reportOutage/confirm'
import {getState} from '../actions.js'

class ReportOutage extends Component {
		constructor(props) {
		super(props)
	}
// componentDidMount(){
//     console.log(this.props)
//   this.props.dispatch(getState({ 
//   "step":1,
//   "links":{
//     "pstr":"/#pstr",
//     "pltr":"/#pltr",
//     "outage":"/#outage",
//     "status":"/#status",
//     "sltr":"/#sltr"
//   },
//   "reportType":"Phone",
//   "address" :
//       {
//         "line1":"1234 Main St",
//         "line2":"Apt 102",
//         "city":"Detroit",
//         "zipcode":"12345"
//       }
// }))
// }
render(){
  //store is in window so accessible dont do it
 const {step} = this.props
    console.log("this is from ReportOutage ",step)
        switch(step){
          case 1: return <Step1 />
          case 2: return <Step2/>
          case 3: return <Step3/>
          case 4: return <Confirm/>
          default: return <Step1/>
        }
}
}

function mapStateToProps (state) {
  console.log('reportOutage Status ',state)
  return {
    step: state.step
  }
}

export default connect(mapStateToProps)(ReportOutage)

