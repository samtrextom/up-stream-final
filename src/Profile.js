import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from './NavBarComponents/NavBar'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import ProfileArticleList from './ProfileArticleList'
import { getFirestore } from "redux-firestore"

const style={
    padding: '0px',
    margin: '0px'
}


class Profile extends React.Component{

    

    render(){

        console.log(this.props)

        const firestore = getFirestore()
        const profileUser= Object

        var docRef = firestore.collection('users').doc(this.props.profileId)

        docRef.get().then(function(doc) {
            if (doc.exists) {

                profileUser.username = doc.data().username
                profileUser.country = doc.data().country
                profileUser.game = doc.data().game
                profileUser.genre = doc.data().genre
                profileUser.rank = doc.data().rank
                profileUser.influencePoints = doc.data().influencePoints
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

        console.log(profileUser)

        return(
            <div>
                <NavBar></NavBar>         
                <div className="home-page">
                    <Container float="center">
                        <Row style={style} className="justify-content-md-center">
                            <Col style={style} md="auto">
                                <div className="login-form">
                                    <h3 className="white-text">{profileUser.username}</h3>
                                    <img/>
                                    <div className="white-text">{profileUser.country}</div>
                                    <div className="white-text">Favorite Game: {profileUser.game}</div>
                                    <div className="white-text">Favorite Genre: {profileUser.genre}</div>
                                </div>
                            </Col>
                            <Col style={style} md="auto">
                                <Row style={style} className="justify-content-md-center">
                                    <div className="login-home-square">
                                        <h1 className="white-text">{profileUser.rank}</h1>
                                        <p className="white-text">Influence Points: {profileUser.influencePoints}</p>
                                    </div>
                                </Row>
                                <Row style={style} className="justify-content-md-center">
                                    <div className="login-home-square">
                                        <h1 className="white-text">Achievements</h1>
                                        <p className="white-text">Most Recent Achievement</p>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={style} className="justify-content-md-center">
                            <ProfileArticleList articles={this.props.articles} profileId={this.props.profileId}></ProfileArticleList>
                        </Row>
                        <Row style={style} className="justify-content-md-center">
                            <Col style={style} md="auto">
                                <div className="login-square glow-on-hover">
                                    <img className="login-square-pic" src="../media/bwyoutubelink.png"/>
                                    <div className="profile-data">
                                        <img src="../media/coloryoutubelink.png" />
                                    </div> 
                                </div>
                            </Col>
                            <Col style={style} md="auto">
                                <div className="login-square glow-on-hover">
                                    <img className="login-square-pic" src="../media/bwinstagramlink.png"/>
                                    <div className="profile-data">
                                        <img src="../media/colorinstagramlink.png" />
                                    </div> 
                                </div>
                            </Col>
                            <Col style={style} md="auto">
                                <div className="login-square glow-on-hover">
                                    <img className="login-square-pic" src="../media/bwtwitterlink.png"/>
                                    <div className="profile-data">
                                        <img src="../media/colortwitterlink.png" />
                                    </div> 
                                </div>
                            </Col>
                            <Col style={style} md="auto">
                                <div className="login-square glow-on-hover">
                                    <img className="login-square-pic" src="../media/bwtwitchlink.png"/>
                                    <div className="profile-data">
                                        <img src="../media/colortwitchlink.png" />
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

const mapStateToProps=(state, ownProps)=>{

    const id = ownProps.match.params.id

    console.log(id)
    console.log(state)

    return {
        profileId:id,
        articles: state.firestore.ordered.articles || state.article.articles
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'articles'},
        {collection: 'users'}
    ])
)(Profile)