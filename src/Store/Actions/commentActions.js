export const createComment = (comment) =>{
    return (dispatch, getState,{getFirebase, getFirestore})=>{

        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const postId = getState().firebase.auth.uid
        const newComment = {
            articleId:comment.articleId,
            commentText:comment.comment,
            commenter:profile.username,
            commenterId: postId,
            commentedAt: new Date()
        }

        firestore.collection('comments').add({
            newComment
        }).then(()=>{
            dispatch({type: 'CREATE_COMMENT', newComment})
        }).catch((err)=>{
            dispatch({type: 'CREATE_COMMENT_ERROR', err})
        })       
    }
}