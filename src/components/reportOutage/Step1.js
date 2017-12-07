import React,{ Component } from 'react'
import { connect } from 'react-redux'
import C from '../../constants.js'
import rootReducer from '../../reducers'
import {selectReportType } from '../../actions.js'
// import initialState from '../../initialState.json'

 class Step1 extends Component {
    constructor(props) {
    super(props)
     this.handleSubmit = this.handleSubmit.bind(this)
     this.handleChange = this.handleChange.bind(this)
  }

handleSubmit(e){
  console.log("click values are ",e.target.outage.value)
  e.preventDefault()
this.props.dispatch(selectReportType(e.target.outage.value,2))
  }
  handleChange(e){
    //const {id: key, value} = event.target
    console.log("click values are ",e.currentTarget.value)
    //this.props.dispatch(parseAddress(key, value))
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
      <form className="report-trouble-form" onSubmit={this.handleSubmit}>
      <div className="row"> 
          <label>
            <input type="radio" name="outage" value="addressReport" id="addressReport" onChange={this.handleChange}/>Report By address
          </label>
      </div>
      <div className="row">
          <label>
            <input type="radio" name="outage" value="phoneReport" id="phoneReport" onChange={this.handleChange}/>Report By Phone Number
          </label>
      </div>
      <div className="row">
        <div className="col"><button> Report Trouble </button></div>
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
