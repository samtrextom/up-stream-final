import React from 'react'
import ArticleSquare from './ArticleSquare.js'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import style from './appData'

class ArticleList extends React.Component{

    render(){

        const {articles} = this.props
        console.log(articles)

        return(
            <Row style={style} className="justify-content-md-center">
                {articles && articles.map(article=>{
                    return(
                        <Col style={style} md="auto">
                            <ArticleSquare square={article} key={article.id}></ArticleSquare>
                        </Col>
                    )
                })}
            </Row>
        )
    }
}

export default ArticleList