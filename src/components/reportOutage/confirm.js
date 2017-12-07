import React, { Component } from 'react'
import { connect } from 'react-redux'
import C from '../../constants.js'
import rootReducer from '../../reducers'
import { resetHome } from '../../actions.js'

class confirm extends Component {
    constructor(props) {
        super(props)
        this.handleDone = this.handleDone.bind(this)
        this.goHome = this.goHome.bind(this)
    }
    handleDone(e) {
        e.preventDefault()
        alert('Successfully submitted')
    }
    goHome(e) {
        e.preventDefault()
        this.props.dispatch(resetHome())
    }
    render() {
        console.log(this.props)
        const {
        confirmation,
            circuitMode,
            restorationTime,
            reportedTime
    } = this.props.appState

        return (
            <div>
                <div>Confirmation Screen</div>
                <div>Thank you for Submitting your outage<br />
                    We'll reach you as soon as possible
              </div>
                <div>
                    <div>Confirmation#: {confirmation}</div>
                    <div><button onClick={this.goHome}>Report another</button></div>
                    <div>Outage Reported on {reportedTime}</div>
                    <div>Based on the current conditions your outage should be restored by {restorationTime}</div>
                </div>

                <a href="/">Go to Outage Center</a>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('confirm state ', state)
    return {
        appState: state.reportOutage
    }
}

export default connect(mapStateToProps)(confirm)