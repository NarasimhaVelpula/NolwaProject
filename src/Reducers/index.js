import {combineReducers} from 'redux'
const initialState={
                firstName:"",
                lastName:"",
                email:"",
                phoneNumber:"",
                address:"",
                city:"",
                postalCode:"",
                country:"",
                facebook:"",
                google:"",
                twitter:"",
                pinterest:"",
                aboutMe:"",
                profileImage:"",
                file:"",
}
const profile=(state=initialState,action)=>{
    switch(action.type){
            case "addDetails":{
                 return action.payload
            }
            default:{
                return state
            }
    }
}
const allreducer=combineReducers({
        profile:profile
    }
)
export default allreducer