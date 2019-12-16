import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from './NavBarComponents/NavBar'
import TextField from '@material-ui/core/TextField'
import {withStyles} from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import {createArticle} from './Store/Actions/articleActions'
import {connect} from 'react-redux'

const style={
    padding: '0px',
    margin: '0px'
}

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

 

class WriteArticle extends React.Component{

    state={
        content:"",title:"",game:"", topic:""
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();

        this.props.createArticle(this.state)
    }

    render(){

        const {classes} = this.props

        return(
            <div>
                <NavBar></NavBar>         
                <div className="home-page">
                    <Container float="center">
                        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                            <Row style={style} className="justify-content-md-center">
                                <Col style={style} md="auto">
                                    <div className="login-form">
                                        <h2>Your New Article</h2>
                                        <div>
                                        </div>
                                    </div>
                                </Col>
                                <Col style={style} md="auto">
                                    <div className="login-form">
                                        <div>
                                            <div>
                                                <TextField InputLabelProps={{className: classes.input}} InputProps={{className: classes.input}} inputProps={{className: classes.underline}} 
                                                id="title" label="Title" onChange={this.handleChange}/>
                                            </div>
                                            <div>
                                                <InputLabel>Game</InputLabel>
                                                <Select id="game" label="Game" onChange={this.handleChange}>
                                                    <MenuItem value={'Classic World of Warcraft'}>Classic WoW</MenuItem>
                                                    <MenuItem value={'World of Warcraft'}>World of Warcraft</MenuItem>
                                                    <MenuItem value={'League of Legends'}>League of Legends</MenuItem>
                                                    <MenuItem value={'MTG: Arena'}>MTG: Arena</MenuItem>
                                                    <MenuItem value={'Fortnite'}>Fortnite</MenuItem>
                                                    <MenuItem value={'Hearthstone'}>Hearthstone</MenuItem>
                                                    <MenuItem value={'Apex Legends'}>Apex Legends</MenuItem>
                                                    <MenuItem value={'Overwatch'}>Overwatch</MenuItem>
                                                    <MenuItem value={'DOTA 2'}>DOTA 2</MenuItem>
                                                    <MenuItem value={'Teamfight Tactics'}>Teamfight Tactics</MenuItem>
                                                </Select>
                                            </div>
                                            <div>
                                                <TextField InputLabelProps={{className: classes.input}} InputProps={{className: classes.input}} inputProps={{className: classes.underline}} 
                                                id="topic" label="Topic" onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={style} className="justify-content-md-center">
                                <Col style={style} md="auto">
                                    <div className="article-form">
                                        <div className="wide-form-wrapper">
                                            <div className="spacer"></div>
                                            <FormControl fullWidth className={classes.margin} variant="outlined">
                                                <InputLabel htmlFor="Content">Content</InputLabel>
                                                <OutlinedInput  className="text-area" InputLabelProps={{className: classes.input}} InputProps={{className: classes.input}} 
                                                    inputProps={{className: classes.underline},{className: classes.input}}
                                                    id="content" label="Content" onChange={this.handleChange} multiline={true} rows={10} rowsMax={10}/>
                                            </FormControl>
                                            <button className=" glow-on-hover-btn" type="submit">
                                                Finish
                                            </button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </Container>
                </div>
            </div>
        )       
    }
}

const mapDispathchToProps=(dispatch)=>{
    return{
        createArticle:(article)=>dispatch(createArticle(article))
    }
}

export default connect(null, mapDispathchToProps)(withStyles(styles)(WriteArticle))
