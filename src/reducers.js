import {combineReducers} from 'redux'

import C from './constants'

export const reportType = (state = {},action) =>{
console.log("###"+JSON.stringify(action.payload)+ " action_type : "+action.type)
if(action.type==C.CLICK_REPORT_TYPE){
   var t = Object.assign({}, state, {
        step: action.payload.step,
        reportType: action.payload.reportType
      })
   console.log('t here is '+JSON.stringify(t))
   return t 
}else {
  return state
}
}
export const  address = (state ={},action) =>{
console.log("###"+action.type)
if(action.type==C.SELEaddressCT_LOOKUP){
  return Object.assign({}, state,
    address: action.address)
}else {
  return state
}
}

export const step = (step =1,action) =>{
console.log("###"+action.type)
if(action.type==C.INCREMENT_STEP){
  return action.payload
}else if(action.type==C.DECREMENT_STEP){
  return action.payload
}else if(action.type=="SUBMIT_OUTAGE"){
  return 4
}
else {
  return step
}
}

export const links = (state={"links":{
    "pstr":"/#pstr",
    "pltr":"/#pltr",
    "outage":"/#outage",
    "status":"/#status",
    "sltr":"/#sltr"
  }},action) =>{
console.log("###"+action.type)
if(action.type==C.REQUEST_SITES_BY_PHONE){
  return state
}else {
  return state
}
}

export const appState = (state={},action ) =>{
switch (action.type) {
  case "STATE":
    return action.payload
  default:
    return state
}
}

export const reportOutage = (state={},action ) =>{
  switch (action.type) {
    case "SUBMIT_OUTAGE":
    console.log('payload reportOutage',action.payload)
      return action.payload
    default:
      return state
  }
  }
const rootReducer = combineReducers({
reportType,
address,
step,
links,
appState,
reportOutage
})

export default rootReducer
