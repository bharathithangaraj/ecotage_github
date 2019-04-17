import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import Switch from '@material-ui/core/Switch';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import {Link} from 'react-router-dom';

// import Collapse from '@material-ui/core/Collapse';





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

class SignIn extends Component{
  
    state = {
        email : "",
        emailHelperText : "",
        passwordHelperText : "",
        password : "",
        checked: false,
      };
      handleChange = (name) => (event)=>{
        // this.setState(state => ({ checked: !state.checked }));
        this.setState({[name] : event.target.value});
        
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
      }
      
render() {
    const { classes } = this.props;
    const { checked,emailHelperText,passwordHelperText } = this.state;
    const signIn = (
        <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
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
            <div style={{height:'10px'}}/>
            <TextField
              error = {passwordHelperText.length === 0 ? false: true}
              label="Password"
              name="password"
              variant="outlined"
              id="password"
              autoComplete="current-password"
              type="password"
              fullWidth
              required
              helperText={this.state.passwordHelperText}
              onChange={this.handleChange('password')}            
              onBlur={()=>{this.setState({passwordHelperText : this.state.password.length ===0?'Enter password':''})}}
            />
            <FormControlLabel
          control={
            <Switch
              checked = {checked}
              value="checked"
              color="primary"
              onChange={()=>{this.setState({checked:!checked})}}
            />
          }
          label="Remember Me"
        />          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
            </Button>            
            <FormHelperText id="my-helper-text">New to Ecotage
              &nbsp;&nbsp;
              <Link to={`/Signup`}>
                SignUp
              </Link>
            </FormHelperText>
        </form>
      </Paper>
      )
  return (
    <main className={classes.main}>
    {signIn}    
    </main>
  );
}
}
SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);