import React from 'react'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import {withStyles} from '@material-ui/core/styles'
import {connect} from 'react-redux'
import {signIn} from '../Store/Actions/authActions'

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

class LoginForm extends React.Component{
    state={
        email:"",
        password:""
    }
    
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.signIn(this.state)
    }

    render(){
        const {classes} = this.props
        const {authError} = this.props

        return(
            <div className="login-form">
                <Form onSubmit={this.handleSubmit}>
                    <div className="form-header">
                        <br></br>
                        <h2>Sign In or Sign Up</h2>
                    </div>
                    <div className="form-wrapper">
                        <Form.Group style={style} className="form-group-email" controlId="formBasicEmail">
                            <FormControl fullWidth >
                                <TextField InputLabelProps={{className: classes.input}} InputProps={{className: classes.input}} inputProps={{className: classes.underline}} 
                                    id="email" label="Email" onChange={this.handleChange}/>
                            </FormControl>
                        </Form.Group>
                        <Form.Group style={style} className="form-group-password" controlId="formBasicPassword">
                            <FormControl fullWidth >
                                <TextField InputLabelProps={{className: classes.input}} InputProps={{className: classes.input}} inputProps={{className: classes.underline}} 
                                    id="password" label="Password" onChange={this.handleChange}/>
                            </FormControl>
                        </Form.Group>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                    <div className="login-btn-div">
                        <button className="login-btn glow-on-hover-btn" type="submit">
                            Login
                        </button>
                        <br></br>
                        <Link to="/Register">
                            <button className="register-btn glow-on-hover-btn">
                                Register
                            </button>
                        </Link>
                    </div> 
                </Form>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        authError: state.auth.authError
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        signIn:(creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginForm))