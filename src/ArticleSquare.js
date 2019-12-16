import React from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addIP} from './Store/Actions/authActions'

class ArticleSquare extends React.Component{

    handleClick=(e)=>{
        this.props.addIP(this.props.square.authorId)
    }

    render(){

        console.log(this.props)

        

        return(
            <Link to={'/Article/'+ this.props.square.id} >
                <div className="article-square glow-on-hover" onClick={this.handleClick} >
                    <div>
                        <h4>{this.props.square.title}</h4>
                        <p>{this.props.square.game}</p>
                    </div>   
                    <div className="author-square-data">
                        <p className='small-print'>Written by: {this.props.square.authorUsername}</p>
                        {this.props.square.createdAt ? <p className='small-print'>Posted on: {moment(this.props.square.createdAt.toDate()).calendar()}</p> : <p className='small-print'>Not Date Stored</p>}
                    </div> 
                </div>
            </Link>
        )
    }
}


const mapDispatchToProps=(dispatch)=>{
    return{
        addIP: (userId)=> dispatch(addIP(userId))
    }
}


export default connect(null,mapDispatchToProps)(ArticleSquare) 