import React, { Component } from 'react';
import {Redirect,withRouter} from "react-router";
import PropTypes from 'prop-types';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import Switch from '@material-ui/core/Switch';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import InputBase from '@material-ui/core/InputBase';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import withMobileDialog from '@material-ui/core/withMobileDialog';

import IconButton from '@material-ui/core/IconButton';
// import CountryCodes from '../../JsonData/CountryCodes.json'



import {Link} from 'react-router-dom';

// import Collapse from '@material-ui/core/Collapse';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {signUpForm,verificationOTP} from '../../action/UserAction';




const styles = theme => ({
  
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 18,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,

  },
});
class Signup extends Component{
  
    state = {
        email : "",
        emailHelperText : "",
        passwordHelperText : "",
        password : "",
        checked: false,
        showPassword: false,
        phoneCc : {},
        mobileNumber : '',
        mobileNumberHelperText : '',
        otpTimer : {
            Min:2,
            Sec:0
        },
        OTP:'',
        otpHelperText : '',
        isFormSubmitted : false,
        open:false
      };
      handleChange = (name) => (event)=>{
        // this.setState(state => ({ checked: !state.checked }));
        this.setState({[name] : event.target.value});
        
      };
      handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
      };
      validateEmail =() =>(event)=>{
        const emailVal = event.target.value;
        if(emailVal.trim().length === 0 ){
          this.setState({emailHelperText:'Please enter Email'})
        }else if(!emailVal.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/)){
          this.setState({emailHelperText:'Email is not valid'})
        }else{
          this.setState({emailHelperText:''})
        }
      };
      getCountryCode = (name) => (event) => {
          console.log("event.target:"+JSON.stringify(event.target))
        this.setState({[name] : event.target.value});
      }
      numberOnly = (name) => (event) =>{
        event.target.value = event.target.value.replace(/\D/g,'');
      } 
      signUpSumbmit = (e) =>{
        
        
        this.setState({isFormSubmitted:true})
        let formData = {

          email:this.state.email,
          password:this.state.password,
          mobileNumber:this.state.mobileNumber,
         
        };
          this.props.signUpForm(formData)
        // here we need to  implement the async await to send OTP to user mobile and wait for response. 

        e.preventDefault();

       
       
        // if(this.props.signUpDetail.userId != null ) {
        //   this.props.history.push('/Signin');
        //  }else {
        //    let message=this.props.signUpDetail != null ? this.props.signUpDetail.message : 'User Already Exists.!!!'
        //    this.setState({emailHelperText:message})
        //  }
      } 

      handleClickOpen = (e) => {
        let otpData = {otp:this.state.OTP}
        this.props.verificationOTP(otpData)
        // here we need to  implement the async await to verify the OTP
        this.setState({ open: true });
        e.preventDefault()
      };
    
      handleClose = () => {
        this.setState({ open: false });
        
      };

render() {
    const { classes } = this.props;
    const { fullScreen,signUpDetail } = this.props;
    const { emailHelperText,passwordHelperText,mobileNumber,mobileNumberHelperText,
        otpHelperText,
        isFormSubmitted
     } = this.state;
     if(undefined !== signUpDetail.userId && null !== signUpDetail.userId) {
      this.props.history.push('/Signin');
     } 
    const Signup = (
        <Paper className={classes.paper}>
        
        <Typography component="h9" variant="h5">
        Create Account
        </Typography>
        <form className={classes.form}>                
        <TextField 
            error = { emailHelperText.length === 0 ?  false:true}
            label="Email Address"
            name="email"
            variant="outlined"
            id="email"
            floatingLabelText="Phone"
            autoComplete="email"
            type="email"
            fullWidth
            required
            margin="normal"
            helperText={this.state.emailHelperText}
            onChange={this.handleChange('email')}
            onBlur={this.validateEmail(this)}
        />
        <div style={{height:'7px'}}/>
        <TextField
            label="Mobile number"
            id="mobileNumber"

            error = {mobileNumberHelperText.trim().length === 0 ? false: true}        
            name="mobileNumber"
            variant="outlined"                        
            fullWidth
            required
            placeholder='Mobile Number'
            helperText={this.state.mobileNumberHelperText}
            onKeyUp={this.numberOnly(mobileNumber)}
                    
            onBlur={()=>{this.setState({mobileNumberHelperText : this.state.mobileNumber.length ===0?'Enter Mobile number':''})}}
                onChange={this.handleChange('mobileNumber')}            
            InputProps={{
                startAdornment: '(+91)-',
            }}
        />
        <div style={{height:'15px'}}/>
        <TextField
            error = {passwordHelperText.length === 0 ? false: true}
            label="Password"
            name="password"
            variant="outlined"
            id="password"
            autoComplete="current-password"
            type={this.state.showPassword ? 'text' : 'password'}
            fullWidth
            required
            helperText={this.state.passwordHelperText}
            onChange={this.handleChange('password')}            
            onBlur={()=>{this.setState({passwordHelperText : this.state.password.length ===0?'Enter password':''})}}
            InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                    >
                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
            ),
            }}
        />
        
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.signUpSumbmit}
        >
            Sign Up
        </Button>            
        <FormHelperText id="my-helper-text">Already have an account in Ecotage
        &nbsp;&nbsp;<Link to={`/Signin`}>
            Signin
            </Link>
        </FormHelperText>
        </form>
      </Paper>
      )
      // const otpValidation  = (
      //   <Paper className={classes.paper}>        
      //       <Typography component="h9" variant="h5">
      //       Create Account
      //       </Typography>
            
      //       <form className={classes.form}>
      //           <TextField
      //               disabled
      //               label="Mobile Number"
      //               name="mobileNumbers"
      //               variant="filled"    
      //               defaultValue="mobilenumber"
      //               className={classes.textField}

      //               style={{textIndent:'20px'}}                                                            
      //               value={this.state.mobileNumber}  
      //               InputProps={{
      //                   startAdornment: '(+91)-',
      //               }}      
      //           />
      //           <TextField 
      //               error = { otpHelperText.length === 0 ?  false:true}
      //               label="Enter OTP"
      //               name="OTPil"
      //               variant="outlined"
      //               id="OTP"                    
      //               autoComplete="OTP"                    
      //               fullWidth
      //               required
      //               margin="normal"
      //               helperText={this.state.otpHelperText}
      //               onChange={this.handleChange('OTP')}
      //           />
      //           <Button
      //               type="submit"
      //               fullWidth
      //               variant="contained"
      //               color="primary"
      //               className={classes.submit}
      //               onClick={this.handleClickOpen}
      //           >
      //               Verify
      //           </Button> 
                
      //         <Dialog
      //           fullScreen={fullScreen}
      //           open={this.state.open}
      //           onClose={this.handleClose}
      //           aria-labelledby="responsive-dialog-title"
      //         >
      //           <DialogTitle id="responsive-dialog-title">{"OTP Verification"}</DialogTitle>
      //           <DialogContent>
      //             <DialogContentText>
      //               Your Mobile Number has been verified. Kinldy do the same for E-Mail verfication in Profile Menu. 
      //             </DialogContentText>
      //           </DialogContent>
      //           <DialogActions>            
      //             <Button onClick={this.handleClose} color="primary" autoFocus>
      //               Close
      //             </Button>
      //           </DialogActions>
      //         </Dialog>
      //       </form>
      //   </Paper>

      // );
  return (
    <main className={classes.main}>
    {Signup}
    </main>
  );
}
}
Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(Signup);
const mapStateToProps = state =>({
  user : state.loginStore.user,
  signUpDetail : state.loginStore.signUpDetail
})
const mapDispatchToProps = dispatch => bindActionCreators ({
  signUpForm,
  verificationOTP
},dispatch)

//export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Signup))(withStyles(styles)(Signup));
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Signup)))
