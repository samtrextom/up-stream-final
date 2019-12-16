import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signIn} from '../Store/Actions/authActions'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

const style={
    padding: '0px',
    margin: '5px',
}

class SignedInLinks extends React.Component{

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

        const {authError} = this.props

        return(         
            <div className="nav nav-pills">
                <NavLink to={'Leaderboard'} className={'nav-login-btn'} style={style}>
                    <div className={'nav-item'}>
                        Top Users
                    </div>
                </NavLink>
                <NavLink to={'Register'} className={'nav-login-btn'} style={style}>
                    <div className={'nav-item'}>
                        Register
                    </div>
                </NavLink>
                <Form inline onSubmit={this.handleSubmit}>
                    <InputGroup>
                        <FormControl className='nav-bar-login-input'
                            style={style}
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                            id="email"
                            onChange={this.handleChange}
                        />
                        <FormControl className='nav-bar-login-input'
                            style={style}
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                            id="password"
                            onChange={this.handleChange}
                        />
                        <InputGroup.Append>
                            <div className="red-text center">
                                {authError ? <p>{authError}</p> : null}
                            </div>
                        </InputGroup.Append>
                    </InputGroup>
                    <button className="nav-login-btn" type="submit" style={style}>
                        Login
                    </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)