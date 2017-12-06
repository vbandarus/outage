import React,{ Component } from 'react'

export class Pstr extends Component {
    constructor(props) {
    super(props)
  }

submit(event){
    event.preventDefault()
    this.setState({route:event.target.outage.value});
    
  }
render(){
    return (
      <div className="container-fluid PADD20PX">
      
      <div className="row">
        <div className="section_title col">PSTR</div>
      </div>
      <form onSubmit={this.submit} className="report-trouble-form">
      <div>PSTR</div>
      </form>
      </div>
    )
  }
}
