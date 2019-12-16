import React from 'react'
import ArticleSquare from './ArticleSquare.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from './NavBarComponents/NavBar'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {connect} from 'react-redux'
import ArticleList from './ArticleList.js'
import style from './appData'

class Home extends React.Component{

    render(){

        const {articles} = this.props

        const articles1 = articles.slice(0,4)
        const articles2 = articles.slice(4,8)
        const articles3 = articles.slice(8,12)
        const articles4 = articles.slice(12,16)

        return(
            <div>
                <NavBar></NavBar>         
                <div className="home-page">
                    <Container float="center">
                        <Row><h3 className="white-text home-header">All Your Gaming Articles In One Place</h3></Row>
                        <ArticleList articles={articles1}></ArticleList>
                        <ArticleList articles={articles2}></ArticleList>
                        <ArticleList articles={articles3}></ArticleList>
                        <ArticleList articles={articles4}></ArticleList>
                    </Container>
                </div>
            </div>
        )       
    }
}

const mapStateToProps=(state)=>{

    return {
        articles: state.firestore.ordered.articles || state.article.articles
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'articles'}
    ])
)(Home)


