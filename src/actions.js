import C from './constants'


export function selectReportType (reportType , step = '2') {
  console.log(`action creator log ${reportType},  ${step}`)
  return {
    type: C.CLICK_REPORT_TYPE,
    payload: {reportType, step }
  }
}


export function stepChange (step) {
  console.log(`action creator log  ${step}`)
  return {
    type: C.INCREMENT_STEP,
    payload: step
  }
}
export function getState(state){
  return {
    type: "STATE",
    payload: state
  }
}

export function submitOutage(state){
  return{
    type:"SUBMIT_OUTAGE",
    payload: {
      confirmation: 12345,
      circuitMode: "normal",
      restorationTime: "12/9/2017",
      reportedTime: "12/5/2017"
    }
  }
}
