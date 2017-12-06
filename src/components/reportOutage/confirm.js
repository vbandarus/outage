import React,{ Component } from 'react'
import { connect } from 'react-redux'
import C from '../../constants.js'
import rootReducer from '../../reducers'
import {stepChange} from '../../actions.js'

class confirm extends Component{
    constructor(props) {
    super(props)
    this.handleDone = this.handleDone.bind(this)
}
handleDone(e){
e,preventDefault(e)
alert('Successfully submitted')
}
render(){
    console.log(this.props)
        const {
        confirmation,
		circuitMode,
		restorationTime,
		reportedTime
    } = this.props.appState

    return(
        <div>
        <div>Confirmation Screen</div>
            <div>Thank you for Submitting your outage<br/>
            We'll reach you as soon as possible
              </div>
                <div>
                    <div>Confirmation#: {confirmation}</div>
                    <div><a href="#">Report another</a></div>
                </div>
                
                <a href="/">GO to home page</a>
                </div>
    )
}
}

function mapStateToProps (state) {
    console.log('confirm state ',state)
    return {
        appState: state.reportOutage
    }
  }
  
  export default connect(mapStateToProps)(confirm)