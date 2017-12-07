import { combineReducers } from 'redux'

import C from './constants'

export const reportType = (state = {}, action) => {
  if (action.type == C.CLICK_REPORT_TYPE) {
    return action.payload.reportType
  } else {
    return state
  }
}
export const address = (state = {}, action) => {
  switch (action.type) {
    case C.REQUEST_SITES_BY_ADDRESS: return Object.assign({}, state,address: action.payload.address, step: action.payload.step)
    case "RESET_STATE": return Object.assign({}, state, address: {})
    default: return state
  }
}

export const step = (step = 1, action) => {
  switch (action.type) {
    case C.INCREMENT_STEP: return action.payload
    case C.CLICK_REPORT_TYPE: return action.payload.step
    case C.DECREMENT_STEP: return action.payload
    case "SUBMIT_OUTAGE": return action.payload.step
    case "RESET_STATE": return 1
    case C.REQUEST_SITES_BY_ADDRESS: return action.payload.step
    case "OUTAGE_TYPE": return action.payload.step
    case "CONTACT_INFO": return action.step
    // case "OUTAGETYPE_SUBMIT": return action.step
    default: return step
  }
}

export function parsedAddress(state = {
                                addressLine1: '',
                                addressLine2: '',
                                zipcode: '',
                                showError: false
                              }, action) {
  switch (action.type) {
    case "PARSE_ADDRESS":
      const { key, value } = action
      const obj = Object.assign({}, state, {
        [key]: value
      })
      return Object.assign({}, obj, {
        showError: false
      })
    case "RECEIVE_ADDRESS_ERROR":
      return Object.assign({}, state, {
        showError: true
      })
    case "RESET_STATE":
    return Object.assign({}, state, {
      showError: false
    })
    default:
      return state
  }
}

export const links = (state = {
    pstr: "/#pstr",
    pltr: "/#pltr",
    outage: "/#outage",
    status: "/#status",
    sltr: "/#sltr"
}, action) => {
  switch(action.type){
    case  C.REQUEST_SITES_BY_PHONE: return state
    default:return state
  }
}

export const ReoutageType =(state={},action) =>{
  switch (action.type) {
    case "CONTACT_INFO":
      return action.contactInfo
    default:
      return state
  }
}

export const appState = (state = {}, action) => {
  switch (action.type) {
    case "OUTAGE_TYPE":
      return action.payload.outagetype
    default:
      return state
  }
}

export const outageType=(state={powerOut : true,
                                wireDown:false,
                                flickerLights:false,
                                partialOutage:false},action)=>{ 
  switch(action.type){
   case "OUTAGETYPE_CHANGED":  const { key, value } = action
   console.log(`change outage type ${key} ${value}`)
                    return Object.assign({}, state, { [key]: value})
   default :return  state
  }
  }

export const reportOutage = (state = {}, action) => {
  switch (action.type) {
    case "SUBMIT_OUTAGE":
      return action.payload
    default:
      return state
  }
}

export const contactInfo =(state={},action) =>{
  switch (action.type) {
    case "CONTACT_INFO":
      return action.contactInfo
    default:
      return state
  }
}

const rootReducer = combineReducers({
  reportType,
  address,
  parsedAddress,
  contactInfo,
  step,
  links,
  reportOutage,
  outageType
})

export default rootReducer
