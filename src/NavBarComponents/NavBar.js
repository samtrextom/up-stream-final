import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import SignedInLinks from './SignedOutLinks'
import SignedOutLinks from './SignedInLinks'

class NavBar extends React.Component {
    render(){

        const inOut = !this.props.state.firebase.auth.uid ? <SignedInLinks profile={this.props.state}></SignedInLinks> : <SignedOutLinks></SignedOutLinks>
        return (
            <nav className="navbar">
                <div className="row">
                    <div className='guild-name'>
                        <Link to="/Home">
                            <h1>UpStream</h1>
                        </Link>
                    </div>
                    {inOut}
                </div>
            </nav>
        );
    }
    
}

const mapStateToProps=(state)=>{
    return{
        state
    }
}

export default connect(mapStateToProps)(NavBar)