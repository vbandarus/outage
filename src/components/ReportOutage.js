import React, { Component } from 'react'
import C from '../constants.js'
import { connect } from 'react-redux'
import ReportBy from './reportOutage/Step1.js'
import PremiseLookUp from './reportOutage/Step2.js'
import OutageType from './reportOutage/Step3.js'
import Verify from './reportOutage/Verify'
import ContactInfo from './reportOutage/ContactInfo'
import Confirm from './reportOutage/confirm'
import Questions from './reportOutage/Questions'
import { getState } from '../actions.js'

class ReportOutage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    //store is in window so accessible dont do it
    const { step } = this.props
    console.log("this is from ReportOutage ", step)
    switch (step) {
      case 1: return <ReportBy />
      case 2: return <PremiseLookUp />
      case 3: return <ContactInfo />
      case 4: return <OutageType />
      case 5: return <Questions />
      case 6: return <Verify />
      case 7: return <Confirm />
      default: return <ReportBy />
    }
  }
}

function mapStateToProps(state) {
  console.log('reportOutage Status ', state)
  return {
    step: state.step
  }
}

export default connect(mapStateToProps)(ReportOutage)

