

export const createArticle = (article) =>{
    return (dispatch, getState,{getFirebase, getFirestore})=>{

        const firestore = getFirestore();
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid

        firestore.collection('articles').add({
            ...article,
            authorUsername: profile.username,
            authorId: authorId,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type: 'CREATE_ARTICLE', article})
        }).catch((err)=>{
            dispatch({type: 'CREATE_ARTICLE_ERROR', err})
        })       
    }
}

export const updateArticle=(article)=>{
    return (dispatch, getState,{getFirebase, getFirestore})=>{

        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const postId = getState().firebase.auth.uid
        const newComment = {
            commentText:article.comment,
            commenter:profile.username,
            commenterId: postId,
            commentedAt: new Date()
        }

        firestore.collection('articles').doc(article.articleId).collection('comments').add({
            newComment
        }).then(()=>{
            dispatch({type: 'UPDATE_ARTICLE', article})
        }).catch((err)=>{
            dispatch({type: 'UPDATE_ARTICLE_ERROR', err})
        })       
    }
}