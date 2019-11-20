import { GET_ERROR, GET_CITY } from "../actions/cityActions"

const initState = {
    cities: [],
    error: null
}
    

const cityreducer = (state = initState, action) => {
    switch(action.type){
        case GET_CITY:
            return {
                ...state,
                cities: action.payload
            }
       case GET_ERROR:
           return {
               ...state,
               error: action.payload
           }
           default:
                return state
    }
    
}





export default cityreducer 