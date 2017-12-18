import React, { Component } from 'react'
import { connect } from 'react-redux'
import C from '../../constants.js'
import rootReducer from '../../reducers'
import { resetHome } from '../../actions.js'

class updateContactInfo extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.stepBack = this.stepBack.bind(this)
  }
  stepBack (e) {
    e.preventDefault()
    console.log('reduce step by 1')
    this.props.dispatch(decrementStep(3))
  }
  handleSubmit (e) {
    e.preventDefault()
    console.log(e.target.name)
    alert('Successfully submitted')
  }
  handleClick (e) {
    e.preventDefault()
    console.log(e.target.value)
        // this.props.dispatch(resetHome())
  }
  render () {
    console.log(this.props)
    const {
        confirmation,
        circuitMode,
        restorationTime,
        reportedTime,
        suggestedAddress
    } = this.props.appState

    return (
      <div className="container-fluid PADD20PX">
        <div className="center-950px-block">
          <div className="row">
            <div className="section_title col"><span>Update Contact Info/Report Another outage</span></div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="PADDBOX dte-white-bkg">
              <div>
                <div>Reported outage trouble ID __________</div>
                <div><input type="radio" name="updateContact" id="updateContact" onClick={this.handleClick} />Update Contact Info</div>
                <div><input type="radio" name="reportAnother" id="reportAnother" onClick={this.handleClick} />Report Another outage</div>
              </div>
            </div>
            <div className="row PADDT10PX">
              <div className="col-xs-12">
                <div className="pull-left">
                  <button type="button" onClick={this.stepBack} className="btn dte-white-bkg btn-rounded">Back</button>
                </div>
                <div className="pull-right"><button disabled type="submit">Continue</button></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log('update contact state ', state)
  return {
    appState: state
  }
}

export default connect(mapStateToProps)(updateContactInfo)
