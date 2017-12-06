import React,{ Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {links} from '../initialState.json'
import dteReportOutage from '../images/Report-a-Problem_800x668.jpg'

class OutageCenter extends Component {
    constructor(props) {
    super(props)
  }

  render() { 
    const {step} = this.props
    console.log('render step OutageCenter ',step)
    return(
    <div className="container-fluid MRGT50PX">
      
      <div className="row PADD20PX dte-white-bkg ">
        <div className="col-xs-12 PADDBOX hidden">
           <img src={dteReportOutage} className="heroImage"/>
        </div>
        <div className="col-xs-12 col-md-6 PADDBOX">
          <div>
            <label htmlFor="ReportOutage">
              <Link to={{pathname:'/outage'}} >Report Trouble</Link>
              <div id="ReportOutage"> Please click here to know more about "Report Outage"</div>
            </label>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 PADDBOX">
          <div>
            <label htmlFor="LookupStatus">
            <Link to={{pathname:'/status'}} >Status Lookup</Link>
              <div id="LookupStatus"> Please click here to know more about "Lookup Status"</div>
            </label>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 PADDBOX">
          <div>
            <label htmlFor="Municipalities">
              <Link to='/pltr'>Municipalities</Link>
              <div id="Municipalities"> Please click here to know more about "Municipalities"</div>
            </label>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 PADDBOX">
          <div>
            <label htmlFor="PoliceFire">
            <Link to='/pstr'>Police and Fire</Link>
              <div id="PoliceFire"> Please click here to know more about "Police Fire"</div>
            </label>
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps)(OutageCenter)
