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