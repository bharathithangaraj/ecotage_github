import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { getUserDetail} from '../../action/UserAction'

const useStyles = makeStyles => (theme => ({
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
      backgroundColor: '#058541',
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));

class Checkout extends Component {

  async  componentDidMount(){
    
    const { getUserDetail,logininfo } = this.props;
    if(logininfo.userId != null) {
    await getUserDetail(logininfo.userName,logininfo.token);
    }
     
   }
  
   componentDidCatch() {
   
  }
  
     
  componentWillUnmount() {
    const {logininfo } = this.props;
    if(logininfo.userId != null) {
    this.props.getUserDetail(logininfo.userName,logininfo.token);
    }
  }
  
    state = {  
        
        step : 0,
        firstName : '',
        lastName : '',
        addressline1 : '',
        addressline2 : '',
        city : '',
        state : '',
        zip:'',
        country : '',
        nameOnCard : '',
        cardNumber : '',
        expDate : '',
        cvv :'',
        cvvText:false,
        cardText :false,
        addUserDtls : false, 
        
    }

     getStepContent = (step)  =>{
        switch (step) {
          case 0:
            return <AddressForm
            nextStep={this.nextStep}
                handleChange={this.handleChange}
                values = {this.state} />;
          case 1:
            return <PaymentForm  nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values = {this.state}/>;
         case 2:
             return <Review nextStep={this.nextStep}
             prevStep={this.prevStep}
             handleChange={this.handleChange}
             values = {this.state}/>;
          default:
            throw new Error('Unknown step');
        }
      }

    nextStep = () => {
        const {step} = this.state;
        console.log('next step called')
        this.setState({
            step : step+1
        });
        console.log(this.state)
    }

    prevStep = () => {
        const {step} = this.state;
        console.log('prev step called')
        this.setState({
            step : step-1
        });
    }

    handleChange =input => e => {
        
        this.setState({[input] : e.target.value});

        const {firstName,lastName,addressline1,addressline2,city,state,zip,country,nameOnCard,cardNumber,expDate,cvv,cvvText} = this.state

        switch(input) {
          case 'cvv':
              if(cvv.length > 3) {
                this.setState({cvvText:true})
              } else {
                this.setState({cvvText:false})
              }
             break;
          
             case 'cardNumber':
             var re16digit = /^(?:3[47][0-9]{13})$/
              if(cardNumber.length > 16) {
              if(!re16digit.test(cardNumber)) {
                this.setState({cardText:true})
              } else {
                this.setState({cardText:false})
              }
              } else {
                this.setState({cardText:false})
              }
             break;


            default:
            return 
        }

    }

    render() {
        const classes = useStyles();
        const {step} = this.state;
        const {firstName,lastName,addressline1,addressline2,city,state,zip,country,nameOnCard,cardNumber,expDate,cvv,cvvText,cardText,addUserDtls} = this.state
        const values = {firstName,lastName,addressline1,addressline2,city,state,zip,country,nameOnCard,cardNumber,expDate,cvv,cvvText,cardText,addUserDtls}
        const steps = ['Shipping address', 'Payment details', 'Review your order'];
        
       return (

        <React.Fragment>
            <main className={classes.layout} style={{width:'60%',marginLeft:'22%'}}>
            <Paper className={classes.paper} style={{padding:'5%'}}>
            <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={step} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label} >
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
         
          
            {step === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                   We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) :(
                <React.Fragment>
                  {this.getStepContent(step)}
                  
                </React.Fragment>
              ) }
             </Paper>
            </main>
        </React.Fragment>

       )

    
    }
}

const mapStateToProps = state =>({
  logininfo : state.loginStore.logininfo,
  userDetail : state.loginStore.userDetail
})
const mapDispatchToProps = dispatch => bindActionCreators ({
  getUserDetail
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);