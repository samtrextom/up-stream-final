import React from 'react'
import ArticleSquare from './ArticleSquare.js'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import style from './appData'

class ProfileArticleList extends React.Component{

    render(){

        const {articles} = this.props
        console.log(articles)

        return(
            <Row style={style} className="justify-content-md-center">
                {articles && articles.map(article=>{
                    if(article.authorId===this.props.profileId){
                        return(
                            <Col style={style} md="auto">
                                <ArticleSquare square={article} key={article.id}></ArticleSquare>
                            </Col>
                        )
                    }
                })}
            </Row>
        )
    }
}

export default ProfileArticleList