import C from './constants'


export function selectReportType(reportType = "addressReport") {
  return {
    type: C.CLICK_REPORT_TYPE,
    payload: { reportType }
  }
}

export function decrementStep(step){
  console.log(step," step in decrement")
  step = step>1?step - 1:1
  return{
    type: C.DECREMENT_STEP,
    payload: step
  }
}
export function incrementStep(step){
  console.log(step," step in decrement")
  step = step + 1
  return{
    type: C.INCREMENT_STEP,
    payload: step
  }
}

export function addressLookup(addressSuggestions={}, step) {
  step = step + 1
  console.log(addressSuggestions)
  return {
    type: C.REQUEST_SITES_BY_ADDRESS,
    payload:
      {
        addressSuggestions,
        step
      }
  }
}

export function stepChange(step) {
  return {
    type: C.INCREMENT_STEP,
    payload: step
  }
}

export function getState(state) {
  return {
    type: "STATE",
    payload: state
  }
}

export function resetHome(state = {
  step: 1
}) {
  return {
    type: "RESET_STATE",
    payload: state
  }
}
export function parseAddress(key, value) {
  return {
    type: "PARSE_ADDRESS",
    key,
    value
  }
}

export function selectOutageType(key, value) {
  console.log("selectOutageType ", key, value)
  return {
    type: "OUTAGETYPE_CHANGED",
    key, value
  }
}

export function verifyAction() {
  return {}
}

export function contactInfo(contactInfo, step) {
  step = step + 1
  return {
    type: "CONTACT_INFO",
    contactInfo,
    step
  }
}
export function submitOutage(state) {
  return {
    type: "SUBMIT_OUTAGE",
    payload: {
      step: 7,
      confirmation: 12345,
      circuitMode: "normal",
      restorationTime: "12/9/2017",
      reportedTime: "12/5/2017"
    }
  }
}
