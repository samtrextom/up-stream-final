import React from 'react'
import { ListGroup } from 'react-bootstrap'
import Comment from './Comment'

class CommentList extends React.Component{

    render(){

        const {comments} = this.props
        const {articleId} = this.props

        console.log(articleId)

        return(
            <ListGroup>
                {comments && comments.map(comment=>{
                    console.log(comment)
                    if(comment.newComment.articleId===articleId){
                        return(
                            <Comment comment={comment.newComment}></Comment>
                        )
                    }
                    else{
                        return(
                            null
                        )
                    }
                })}
            </ListGroup>
        )
    }
}

export default CommentList