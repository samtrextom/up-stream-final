import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../Store/Actions/authActions'

const style={
    padding: '0px',
    margin: '5px',
}

class SignedOutLinks extends React.Component{
    
    render(){

        return(
            <div className="nav nav-pills">
                <NavLink to={'Leaderboard'} className={'nav-login-btn'} style={style}>
                    <div className={'nav-item'}>
                        Top Users
                    </div>
                </NavLink>
                <NavLink to={'WriteArticle'} className={'nav-login-btn'} style={style}>
                    <div className={'nav-item'}>
                        Create
                    </div>
                </NavLink>
                <a onClick={this.props.signOut}>
                    <div className={'nav-login-btn'} style={style}>
                        <div className={'nav-item'}>
                            Sign Out
                        </div>
                    </div>
                </a>
                <NavLink to={'UserDashboard'} className={'nav-login-btn'} style={style}>
                    <div className={'nav-tab'}>
                        <div className={'nav-item'}>
                            {this.props.state.firebase.profile.username}
                        </div>
                    </div>
                </NavLink>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        state
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signOut: ()=> dispatch(signOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignedOutLinks)