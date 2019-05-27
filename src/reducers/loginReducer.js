
import {SIGNIN,SIGNUP,VERIFYOTP} from '../Action_Constants';

const loginState = {
    logininfo:{},
    signUpDetail:{},
    otpNumber : ''
}
export default function (state = loginState , action) {
    const {type,data} = action
    console.log("called here"+JSON.stringify(state))
    switch(type){
        case SIGNIN : 
        return {
            login:data,
            ...state
        }
        case SIGNUP:
        return {
            signUpDetail:data,
            ...state
        }
        case VERIFYOTP:
        return {
            otpNumber:data,
            ...state
        }
       default :
        return state
    }
}