import { combineReducers } from 'redux'

import C from './constants'

export const reportType = (reportType="addressReport", action) => {
  if (action.type == C.CLICK_REPORT_TYPE) {
    return action.payload.reportType
  } else {
    return reportType
  }
}
export const statusLookUp = (statusLookUp="addressLookup", action) => {
  console.log("status look up ",action.payload)
  if (action.type == C.SELECT_STATUS_LOOKUP) {
    return action.payload
  } else {
    return statusLookUp
  }
}
export const addressSuggestions = (addressSuggestions = [], action) => {
  switch (action.type) {
    case C.REQUEST_SITES_BY_ADDRESS: return  action.payload.addressSuggestions
    case C.RESET_STATE: return Object.assign({}, state, { address: [] })
    default: return addressSuggestions
  }
}

export const isDuplicate = (isDuplicate = false, action) => {
  switch (action.type) {
    case C.DUPLICATE_OUTAGE: return action.payload
    default: return isDuplicate
  }
}

export const isDNP = (isDNP = false, action) => {
  switch (action.type) {
    case C.DNP_FLAG: return action.payload
    default: return isDNP
  }
}

export const step = (step = 1, action) => {
  switch (action.type) {
    case C.INCREMENT_STEP: return action.payload
    case C.DECREMENT_STEP: return action.payload
    case C.SUBMIT_OUTAGE: return action.payload.step
    case C.RESET_STATE: return 1
    case C.REQUEST_SITES_BY_ADDRESS: return action.payload.step
    case C.OUTAGE_TYPE: return action.payload.step
    case C.CONTACT_INFO: return action.step
    // case C.CLICK_REPORT_TYPE: return action.payload.step
    // case C.OUTAGETYPE_SUBMIT: return action.step
    default: return step
  }
}

export function parsedAddress(state = {
  addressLine1: '',
  addressLine2: '',
  addressLine3: '',
  city:'',
  state:'Michigan',
  zipcode: '',
  phoneNumber:'',
  showError: false
}, action) {
  switch (action.type) {
    case C.PARSE_ADDRESS:
      const { key, value } = action
      const obj = Object.assign({}, state, {
        [key]: value
      })
      return Object.assign({}, obj, {
        showError: false
      })
    case C.RECEIVE_ADDRESS_ERROR:
      return Object.assign({}, state, {
        showError: true
      })
    case C.RESET_STATE:
      return Object.assign({}, state, {
        parsedAddress:{},
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
  switch (action.type) {
    case C.REQUEST_SITES_BY_PHONE: return state
    default: return state
  }
}

export const ReoutageType = (state = {}, action) => {
  switch (action.type) {
    case C.CONTACT_INFO:
      return action.contactInfo
    default:
      return state
  }
}

export const appState = (state = {}, action) => {
  switch (action.type) {
    case C.OUTAGE_TYPE:
      return action.payload.outagetype
    default:
      return state
  }
}

export const outageType = (state = {
  powerOut: true,
  wireDown: false,
  flickerLights: false,
  partialOutage: false
}, action) => {
  switch (action.type) {
    case C.OUTAGETYPE_CHANGED: const { key, value } = action
      console.log(`change outage type ${key} ${value}`)
      return Object.assign({}, state, { [key]: value })
    default: return state
  }
}

export const reportOutage = (state = {}, action) => {
  switch (action.type) {
    case C.SUBMIT_OUTAGE:
      return action.payload
    default:
      return state
  }
}

export const contactInfo = (state = {}, action) => {
  switch (action.type) {
    case C.CONTACT_INFO:
      return action.contactInfo
    default:
      return state
  }
}

const rootReducer = combineReducers({
  reportType,
  statusLookUp,
  addressSuggestions,
  parsedAddress,
  isDuplicate,
  isDNP,
  contactInfo,
  step,
  links,
  reportOutage,
  outageType
})

export default rootReducer
