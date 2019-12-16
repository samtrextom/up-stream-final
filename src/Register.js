import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from './NavBarComponents/NavBar'
import TextField from '@material-ui/core/TextField'
import {withStyles} from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import FormControl from '@material-ui/core/FormControl'
import {signUp} from './Store/Actions/authActions'
import {connect} from 'react-redux'

const style={
    padding: '0px',
    margin: '0px'
}

const styles = theme => ({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
        color:'white'
    },
    input: {color: 'white'},
    errorInput:{color: 'red'},
    underline: {
        borderBottom: '1px solid white',
        '&:after': {borderBottom: '2px solid white'},
        '&:hover':{borderBottom: '2px solid white'},
        '&:before':{borderBottom: '2px solid white'}
    },
    errorUnderline:{
        borderBottom: '1px solid red',
        '&:after': {borderBottom: '2px solid red'},
        '&:hover':{borderBottom: '2px solid red'},
        '&:before':{borderBottom: '2px solid red'}
    },
});

 

class Register extends React.Component{

    state={
        username:"", email:"", password:"", password2:"",
        firstName:"", lastName:"", country:"",
        genre:"", game:"",
        youtube:"", twitch:"", twitter:"",instagram:"",
        showPassword: false, confirmPassword: true
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handlePasswordChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
        if(this.state.password1!==this.state.password2){this.setState({confirmPassword:false})}
        if(this.state.password1===this.state.password2){this.setState({confirmPassword:true});e.InputLabelProps={className:styles.input}}
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.signUp(this.state)
    }

    handleClickShowPassword = () => {
        this.setState({showPassword: !this.state.showPassword})
    };
    
    handleMouseDownPassword=(e)=> {
        e.preventDefault();
    };

    render(){

        const {classes} = this.props
        const {authError} = this.props

        return(
            <div>
                <NavBar></NavBar>     
                <div className="home-page">
                    <Container float="center">
                        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                            <Row style={style} className="justify-content-md-center">
                                <Col style={style} md="auto">
                                    <div className="login-form">
                                        <br></br>
                                        <h2>Account Info</h2>
                                        <div className="form-wrapper">
                                            <FormControl fullWidth >
                                                <TextField InputLabelProps={{className: classes.input}} InputProps={{className: classes.input}} inputProps={{className: classes.underline}} 
                                                    id="username" label="User Name" onChange={this.handleChange}/>
                                            </FormControl>
                                            <FormControl fullWidth >
                                                <TextField InputLabelProps={{className: classes.input}} InputProps={{className: classes.input}} inputProps={{className: classes.underline}} 
                                                id="email" label="Email" onChange={this.handleChange}/>
                                            </FormControl>
                                            <FormControl fullWidth >
                                                <TextField InputLabelProps={{className: classes.input}} InputProps={{className: classes.input}} inputProps={{className: classes.underline}}
                                                    id="password" label="Password" type={this.state.showPassword ? 'text' : 'password'} onChange={this.handlePasswordChange}/>
                                                <IconButton aria-label="toggle password visibility" onClick={this.handleClickShowPassword} onMouseDown={this.handleMouseDownPassword}>
                                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>            
                                            </FormControl>
                                            <FormControl fullWidth >
                                                <TextField InputLabelProps={this.state.confirmPassword ? {className: classes.input} : {className: classes.errorInput}} 
                                                        InputProps={this.state.confirmPassword ? {className: classes.input} : {className: classes.errorInput}} 
                                                        inputProps={this.state.confirmPassword ? {className: classes.underline} : {className: classes.errorUnderline}}
                                                        FormHelperTextProps={{className: classes.errorInput}}
                                                    id="password22" label="Re-Enter Password" type={this.state.showPassword ? 'text' : 'password'} onChange={this.handlePasswordChange}
                                                    helperText={this.state.confirmPassword ? "" : "Passwords Do Not Match"}/>
                                            </FormControl>
                                        </div>
                                    </div>
                                </Col>
                                <Col style={style} md="auto">
                                    <div className="login-form">
                                        <h2>Personal Info</h2>
                                        <div className="form-wrapper">
                                            <FormControl fullWidth >
                                                <TextField InputLabelProps={{className: classes.input}} InputProps={{className: classes.input}} inputProps={{className: classes.underline}} 
                                                id="firstName" label="First Name" onChange={this.handleChange}/>
                                            </FormControl>
                                            <FormControl fullWidth >
                                                <TextField InputLabelProps={{className: classes.input}} InputProps={{className: classes.input}} inputProps={{className: classes.underline}} 
                                                id="lastName" label="Last Name" onChange={this.handleChange}/>
                                            </FormControl>
                                            <FormControl fullWidth >
                                                <TextField InputLabelProps={{className: classes.input}} InputProps={{className: classes.input}} inputProps={{className: classes.underline}} 
                                                id="country" label="Country" onChange={this.handleChange}/>
                                            </FormControl>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={style} className="justify-content-md-center">
                                <Col style={style} md="auto">
                                    <div className="login-form">
                                        <h2>Game Info</h2>
                                        <div className="form-wrapper"> 
                                            <FormControl fullWidth >
                                                <TextField InputLabelProps={{className: classes.input}} InputProps={{className: classes.input}} inputProps={{className: classes.underline}} 
                                                id="genre" label="Favorite Genre" onChange={this.handleChange}/>
                                            </FormControl>
                                            <FormControl fullWidth >
                                                <TextField InputLabelProps={{className: classes.input}} InputProps={{className: classes.input}} inputProps={{className: classes.underline}} 
                                                id="game" label="Favorite Game" onChange={this.handleChange}/>
                                            </FormControl>
                                            <div className="red-text center">
                                                {authError ? <p>{authError}</p> : null}
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col style={style} md="auto">
                                    <div className="login-form">
                                        <h2>Social Media</h2>
                                        <div className="form-wrapper">
                                            <FormControl fullWidth >
                                                <TextField InputLabelProps={{className: classes.input}} InputProps={{className: classes.input}} inputProps={{className: classes.underline}} 
                                                id="youtube" label="YouTube" onChange={this.handleChange}/>
                                            </FormControl>
                                            <FormControl fullWidth >
                                                <TextField InputLabelProps={{className: classes.input}} InputProps={{className: classes.input}} inputProps={{className: classes.underline}} 
                                                id="twitch" label="Twitch" onChange={this.handleChange}/>
                                            </FormControl>
                                            <FormControl fullWidth >
                                                <TextField InputLabelProps={{className: classes.input}} InputProps={{className: classes.input}} inputProps={{className: classes.underline}} 
                                                id="twitter" label="Twitter" onChange={this.handleChange}/>
                                            </FormControl>
                                            <FormControl fullWidth >
                                                <TextField InputLabelProps={{className: classes.input}} InputProps={{className: classes.input}} inputProps={{className: classes.underline}} 
                                                id="instagram" label="Instagram" onChange={this.handleChange}/>
                                            </FormControl>
                                        </div>
                                        <button className="login-btn glow-on-hover-btn" type="submit">
                                            Sign Up
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </Container>
                </div>
            </div>
        )       
    }
}

const mapStateToProps=(state)=>{
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }

}

const mapDispatchToProps=(dispatch)=>{
    return{
        signUp:(newUser)=>dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Register))


