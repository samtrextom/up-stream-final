import React from 'react'



class LoginSquare extends React.Component{

    render(){
        return(
            <div className="login-square glow-on-hover">
                <img className="login-square-pic" src={this.props.square.pic}/>
                <div className="square-data">
                    <img src={this.props.square.logoPic}/>
                </div> 
            </div>
        )
    }
}

export default LoginSquare