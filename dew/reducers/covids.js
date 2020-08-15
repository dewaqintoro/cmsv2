import { GET_COVIDS_LIST, GET_COVID_INDO, GET_COVID_POSITIF, GET_COVID_SEMBUH } from "../actions/userActions"

let initialState = {
  title: "dewa",
  getCovidsList:false,
  getCovidIndo:false,
  getCovidPositif:false,
  getCovidSembuh:false,

  errorCovidsList: false,
  errorCovidIndo:false,
  errorCovidPositif:false ,
  errorCovidSembuh:false 

}
 
const covids = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVIDS_LIST:
      return{
        ...state,
        getCovidsList: action.payload.data,
        errorCovidsList: action.payload.errorMessage
      }

    case GET_COVID_INDO:
      return{
        ...state,
        getCovidIndo: action.payload.data,
        errorCovidIndo: action.payload.errorMessage
      }

    case GET_COVID_POSITIF:
      return{
        ...state,
        getCovidPositif: action.payload.data,
        errorCovidPositif: action.payload.errorMessage
      }

    case GET_COVID_SEMBUH:
      return{
        ...state,
        getCovidSembuh: action.payload.data,
        errorCovidSembuh: action.payload.errorMessage
      }

    default:
      return state
  }
}

export default covids
