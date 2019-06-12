import { func } from "prop-types";
import {SHOW_USERS_URL,APP_URL} from "../Action_Constants";

export function loginIn(loginInfo){
    console.log("loginIn method called")
    return async function(dispatch){
        return dispatch({
            type : 'SIGNIN',
            data : loginInfo 
        })
    }
}

export function signUpForm(signUpInfo){
    console.log("signup method called")
    return async function(dispatch){
        return dispatch({
            type : 'SIGNUP',
            data : signUpInfo 
        })
    }
}

export function verificationOTP(otp){    
    return async function(dispatch){
        return dispatch({
            type : 'VERIFYOTP',
            data : otp 
        })
    }
}

export function getUserDetail(loginId) {

    return async function(dispatch){
        console.log('getUserDetail -------------->');
        const res = await fetch(`${APP_URL}/Users/${loginId}`);
        const users = await res.json();
        console.log('users &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
        console.log(users)
        return dispatch({
            type: 'USERINFO',
            data: users
        })

    }

}