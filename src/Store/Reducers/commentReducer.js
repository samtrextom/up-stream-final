const initState={
    comments:[
        {id:0,title:"test",author:"test"}
    ]
}

const commentReducer=(state=initState, action)=>{
    switch(action.type){
        case 'CREATE_COMMENT': console.log('created comment', action.newComment) 
            return state
        case 'CREATE_COMMENT_ERROR': console.log('create comment error', action.err)
            return state
        default: return state
    }
}

export default commentReducer