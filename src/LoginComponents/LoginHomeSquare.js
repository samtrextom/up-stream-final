import React from 'react'
import {Link} from 'react-router-dom'

class LoginHomeSquare extends React.Component{

    render(){
        return(
            <Link to="Home" className="link-tags">
                <div className="login-home-square glow-on-hover">
                    <h1>UpStream</h1>
                </div>
            </Link>
        )
    }
}

export default LoginHomeSquare