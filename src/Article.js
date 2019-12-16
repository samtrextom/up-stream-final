import React from 'react'
import Container from 'react-bootstrap/Container'
import NavBar from './NavBarComponents/NavBar'
import {withStyles} from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Link} from 'react-router-dom'
import moment from 'moment'
import {createComment} from './Store/Actions/commentActions'
import {addIP} from './Store/Actions/authActions'
import CommentList from './CommentList'

const styles = theme => ({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
        color:'white'
    },
    input: {color: 'white'},
    errorInput:{color: 'red'},
    underline: {
        borderBottom: '1px solid white',
        '&:after': {borderBottom: '2px solid white'},
        '&:hover':{borderBottom: '2px solid white'},
        '&:before':{borderBottom: '2px solid white'}
    },
    errorUnderline:{
        borderBottom: '1px solid red',
        '&:after': {borderBottom: '2px solid red'},
        '&:hover':{borderBottom: '2px solid red'},
        '&:before':{borderBottom: '2px solid red'}
    },
});


class Article extends React.Component{

    state={
        comment:'',
        articleId: this.props.articleId
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.createComment(this.state)
        this.props.addIP(this.props.article.authorId)
    }


    render(){

        console.log(this.props)
        const {classes} = this.props
        const {article} = this.props
        const {comments} = this.props
        const {articleId} = this.props
        
        return(
            <div>
                <NavBar></NavBar>     
                <div className="home-page">
                    <Container float="center">
                        <h1 className="white-text">{article.title}</h1>
                        <div className="white-text">Written by: <Link to={'/Profile/'+article.authorId}>{article.authorUsername}</Link></div>
                        <p className="white-text">Posted on: {moment(article.createdAt.toDate()).calendar()}</p>
                        <div className="white-text">{article.content}</div>
                        <form onSubmit={this.handleSubmit}>
                            <FormControl fullWidth className={classes.margin} variant="outlined">
                                <InputLabel htmlFor="Comment">Comment</InputLabel>
                                <OutlinedInput inputProps={{className: classes.underline}} className="text-area"
                                    id="comment" label="Comment" onChange={this.handleChange} multiline={true} rows={4} rowsMax={4}/>
                                    <button className="login-btn glow-on-hover-btn " type="submit">
                                        Comment
                                    </button>
                            </FormControl> 
                        </form>
                        <CommentList comments={comments} articleId={articleId}></CommentList>
                    </Container>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state, ownProps)=>{

    const id = ownProps.match.params.id
    const comments = state.firestore.ordered.comments
    const articles = state.firestore.data.articles
    const article = articles ? articles[id] : null
    return{
        comments:comments,
        article:article,
        articleId:id
    }
}

const mapDispathchToProps=(dispatch)=>{
    return{
        createComment:(comment)=>dispatch(createComment(comment)),
        addIP:(userID)=>dispatch(addIP(userID))
    }
}

export default compose(
    connect(mapStateToProps, mapDispathchToProps),
    firestoreConnect([
        {collection: 'articles'},
        {collection: 'comments'}
    ])
)(withStyles(styles)(Article))