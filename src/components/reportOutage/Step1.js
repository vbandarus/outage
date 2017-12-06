import React,{ Component } from 'react'
import { connect } from 'react-redux'
import C from '../../constants.js'
import rootReducer from '../../reducers'
import {stepChange} from '../../actions.js'
// import initialState from '../../initialState.json'

 class Step1 extends Component {
    constructor(props) {
    super(props)
     this.handleSubmit = this.handleSubmit.bind(this)
  }

handleSubmit(e){
  e.preventDefault()
  console.log(e.targetValue)
this.props.dispatch(stepChange(2))
    
  }
render(){
  const step = this.props.step
  let st = JSON.stringify(step)
  console.log('outage step1 render state ',typeof(st))
            return (
      <div className="container-fluid PADD20PX">
      
      <div className="row">
        <div className="section_title col">Step 1</div>
      </div>
      <form onSubmit={this.handleSubmit} className="report-trouble-form">
      <div className="row"> 
          <label className="checkbox-inline">
            <input type="radio" name="outage" value="addressReport"/>Report By address
          </label>
      </div>
      <div className="row">
          <label>
            <input type="radio" name="outage" value="phoneReport"/>Report By Phone Number
          </label>
      </div>
      <div className="row">
        <div className="col"><button > Report Trouble </button></div>
      </div>
      </form>
      </div>
      )  
  }
}

function mapStateToProps (state,ownProps) {
  console.log('outage step1 state ',state)
   console.log('outage step1 props',ownProps)
  return {
    step: state.step
  }
}

export default connect(mapStateToProps)(Step1)
