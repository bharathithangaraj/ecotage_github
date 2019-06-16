import { func } from "prop-types";
import {SHOW_USERS_URL,APP_URL} from "../Action_Constants";

export function loginIn(loginInfo){
    console.log("loginIn method called")

    // const settings = {
    //     method: 'POST', // or 'PUT'
    //     body: JSON.stringify(loginInfo), // data can be `string` or {object}!
    //     headers:{
    //       'Content-Type': 'application/json'
    //     }
    // };
    return async function(dispatch){

        console.log(loginInfo.email)
        console.log(loginInfo.password)
        const res = await fetch(`${APP_URL}/login/${loginInfo.email}/password/${loginInfo.password}`);
        const singInres = await res.json();
        console.log('singInres &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
        console.log(singInres)
        return dispatch({
            type : 'SIGNIN',
            data : singInres 
        })
    }
}

export function signUpForm(signUpInfo){
    console.log(signUpInfo)
    const settings = {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(signUpInfo), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
    };
    console.log("signup method called")
    return async function(dispatch){

        const res = await fetch(`http://localhost:8180/user/register`,settings);
        const singUpres = await res.json();
        console.log('SIGNUP ++++++++++')
        console.log(JSON.stringify(singUpres))
        return dispatch({
            type : 'SIGNUP',
            data : singUpres 
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

export function getUserDetail(loginId,token) {

    return async function(dispatch){
        console.log('getUserDetail -------------->'+loginId);
        console.log('getUserDetail -------------->'+token);
        const res = await fetch(`${APP_URL}/Users/${loginId}/token/${token}`);
        const users = await res.json();
        console.log('users &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
        console.log(users)
        return dispatch({
            type: 'USERINFO',
            data: users
        })

    }

}

export function resetLoginInfo(){
    return {
        type : 'RESET_LOGININFO'
    }
}

export function resetSignUp(){
    return {
        type : 'RESET_SIGNUP'
    }
}

export function resetUserDetail(){
    return {
        type : 'RESET_USERDETAIL'
    }
}