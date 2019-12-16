import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from './NavBarComponents/NavBar'
import ListGroup from 'react-bootstrap/ListGroup'
import moment from 'moment'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

const style={
    padding: '0px',
    margin: '0px'
}

class UserDashboard extends React.Component{

    render(){
        return(
            <div>
                <NavBar></NavBar>     
                <div className="home-page">
                    <Container float="center">
                        <Row style={style} className="justify-content-md-center">
                            <Col style={style} md="auto">
                                <Row style={style} className="justify-content-md-center">
                                    <div className="login-form">
                                        <h2>Stats</h2>
                                        <div className="form-wrapper">
                                            <div className="white-text">
                                                {this.props.state.firebase.profile.rank}
                                            </div>
                                            <div className="white-text">
                                                Influence Points: {this.props.state.firebase.profile.influencePoints}
                                            </div>
                                            <div className="white-text">
                                                Articles: x
                                            </div>
                                            <div className="white-text">
                                                UpVotes: x DownVotes: x
                                            </div>
                                            <div className="white-text">
                                                Percentage
                                            </div>
                                            <div className="white-text">
                                                Comments
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                                <Row style={style} className="justify-content-md-center">
                                    <div className="login-form">
                                        <h2>Your Achievements</h2>
                                        <div className="form-wrapper">
                                            <p className="white-text">Coming Soon</p>
                                        </div>
                                    </div>
                                </Row>
                            </Col>
                            <Col style={style} md="auto">
                                <div className="dash-articles">
                                    <h2>Your Articles</h2>
                                    <div className="form-wrapper"> 
                                        <ListGroup>
                                            {this.props.articles && this.props.articles.map(article=>{
                                                if(article.authorId===this.props.state.firebase.auth.uid){
                                                    return(
                                                        <ListGroup.Item action variant="dark">
                                                            <Link to={'/Article/'+article.id}>
                                                                <h5>{article.title}</h5>
                                                                <p className='small-print'>Posted on: {moment(article.createdAt.toDate()).calendar()}</p>
                                                            </Link>
                                                        </ListGroup.Item>
                                                    )
                                                }
                                                
                                            })}
                                        </ListGroup>
                                    </div>
                                </div>
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
        state,
        articles: state.firestore.ordered.articles || state.article.articles
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'articles'}
    ])
)(UserDashboard)