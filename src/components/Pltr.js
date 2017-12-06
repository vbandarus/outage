import React,{ Component } from 'react'

export class Pltr extends Component {
    constructor(props) {
    super(props)
  }

submit(event){
    event.preventDefault()
    this.setState({route:event.target.outage.value});
    
  }
render(){
  let _addressReport,_phoneReport,_addressStatus,_phoneStatus,_confNoStatus
    return (
      <form onSubmit={this.submit} className="report-trouble-form">
      <div className="container-fluid PADD20PX">
      
      <div className="row">
        <div className="section_title col">PLTR</div>
      </div>
      
      <div>PLTR</div>
      
      </div></form>
    )
  }
}
