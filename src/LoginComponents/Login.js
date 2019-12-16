import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LoginSquare from './LoginSquare.js'
import LoginForm from './LoginForm.js'
import LoginHomeSquare from './LoginHomeSquare.js'
import {connect} from 'react-redux'

const style={
    padding: '0px',
    margin: '0px'
}

class Login extends React.Component{

    render(){

        return(
            <div>               
                <div className="login-page">
                    <Container float="center">
                        <Row style={style} className="justify-content-md-center">
                            <Col style={style} md="auto">
                                <LoginForm></LoginForm>
                            </Col>
                            <Col style={style} md="auto">
                                <Row style={style} className="justify-content-md-center">
                                    <Col style={style} md="auto">
                                        <LoginSquare square={this.props.squares[0]}></LoginSquare>
                                    </Col>
                                    <Col style={style} md="auto">
                                        <LoginSquare square={this.props.squares[1]}></LoginSquare>
                                    </Col>
                                </Row>
                                <Row style={style} className="justify-content-md-center">
                                    <Col style={style} md="auto">
                                        <LoginSquare square={this.props.squares[2]}></LoginSquare>
                                    </Col>
                                    <Col style={style} md="auto">
                                        <LoginSquare square={this.props.squares[3]}></LoginSquare>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={style} className="justify-content-md-center">
                            <Col style={style} md="auto">
                                <LoginSquare square={this.props.squares[4]}></LoginSquare>
                            </Col>
                            <Col style={style} md="auto">
                                <LoginSquare square={this.props.squares[5]}></LoginSquare>
                            </Col>
                            <Col style={style} md="auto">
                                <LoginSquare square={this.props.squares[6]}></LoginSquare>
                            </Col>
                            <Col style={style} md="auto">
                                <LoginSquare square={this.props.squares[7]}></LoginSquare>
                            </Col>
                        </Row>
                        <Row style={style} className="justify-content-md-center">
                            <Col style={style} md="auto">
                                <Row style={style} className="justify-content-md-center">
                                    <Col style={style} md="auto">
                                        <LoginSquare square={this.props.squares[8]}></LoginSquare>
                                    </Col>
                                    <Col style={style} md="auto">
                                        <LoginSquare square={this.props.squares[9]}></LoginSquare>
                                    </Col>
                                </Row>
                            </Col>
                            <Col style={style} md="auto">
                                <LoginHomeSquare></LoginHomeSquare>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        squares: state.loginSquare.squares
    }
}

export default connect(mapStateToProps)(Login)
