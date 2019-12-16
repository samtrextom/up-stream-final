import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'
import moment from 'moment'
import style from './appData'

class Comment extends React.Component{

    render(){
        return(
            <ListGroup.Item style={style}>
                <Card bg="secondary" text="white" style={{ width: '100%' }} style={style}>
                    <Card.Header><Link to={'/Profile/'+this.props.comment.commenterId}>{this.props.comment.commenter}</Link></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {this.props.comment.commentText}
                        </Card.Text>
                        <p className='small-print'>Posted on: {moment(this.props.comment.commentedAt.toDate()).calendar()}</p>
                    </Card.Body>
                </Card>
            </ListGroup.Item>
        )
    }
}

export default Comment