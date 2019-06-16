
import {SIGNIN,SIGNUP,VERIFYOTP,USERINFO,RESET_SIGNUP,RESET_LOGININFO,RESET_USERDETAIL} from '../Action_Constants';

const loginState = {
    logininfo:{},
    signUpDetail:{},
    otpNumber : '',
    userDetail : {}
    
    
}
export default function (state = loginState , action) {
    const {type,data} = action
    console.log("called here"+JSON.stringify(state))
    switch(type){
        case SIGNIN : 
        return {
            ...state,
            logininfo:data
           
        }
        case SIGNUP:
        return {
            ...state,
            signUpDetail:data,
            
        }
        case VERIFYOTP:
        return {
            otpNumber:data,
            ...state
        }
        case USERINFO :
            return {
                ...state,
                userDetail : data
            }
        
        case RESET_LOGININFO :
            return {
            ...state,
            logininfo : {}
        }

        case RESET_SIGNUP :
                return {
                ...state,
                signUpDetail : {}
        }

        case RESET_USERDETAIL :
                return {
                ...state,
                userDetail : {}
        }
       
       default :
        return state
    }
}