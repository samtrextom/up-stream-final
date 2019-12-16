import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from './NavBarComponents/NavBar'
import Table from 'react-bootstrap/Table'
import moment from 'moment'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { getFirestore } from "redux-firestore"

const style={
    padding: '0px',
    margin: '0px'
}

class Leaderboard extends React.Component{

    render(){

        const {users} = this.props

        users.sort((a,b) => (a.influencePoints < b.influencePoints) ? 1 : ((b.influencePoints < a.influencePoints) ? -1 : 0));
        const topUsers = users.slice(0,10)

        return(
            <div>
                <NavBar></NavBar>     
                <div className="home-page">
                    <Container float="center">
                        <Row style={style} className="justify-content-md-center">
                            <Col style={style} md="auto">
                                <div className="dash-articles">
                                    <div className="form-wrapper">
                                        <h2 className="white-text">Top Influencers</h2>\
                                        <Table striped bordered hover variant="dark">
                                            <tbody>
                                                {topUsers.map( user=>{
                                                    return(
                                                        <tr>
                                                            <td>{user.username}</td>
                                                            <td>{user.rank}</td>
                                                            <td>{user.influencePoints}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </Col>
                            <Col style={style} md="auto">
                                <div className="dash-articles">
                                    <div className="form-wrapper">
                                        <h2>Top Articles</h2>
                                        
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

    console.log(state)
    return{
        state,
        users: state.firestore.ordered.users|| state.article.articles
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'users'}
    ]))(Leaderboard)