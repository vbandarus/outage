import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { reportType } from '../initialState.json'
import StatusStart from './Status'
import PremiseLookUp from './reportOutage/Step2'
import Confirm from './reportOutage/confirm'
import '../stylesheets/outage.css'
import '../stylesheets/static-proj.css'
import C from '../constants.js'

class StatusLookUp extends Component {
    constructor(props) {
        super(props)
      }
    
      render() {
        const { step } = this.props
        console.log("this is from Status Lookup ", step)
        switch (step) {
          case 1: return <StatusStart />
          case 2: return <PremiseLookUp />
          case 3: return <Confirm />
          default: return <StatusStart />
        }
      }
    }
    
    function mapStateToProps(state) {
        console.log('reportOutage Status ', state)
        return {
          step: state.step
        }
      }

export default connect(mapStateToProps)(StatusLookUp)
