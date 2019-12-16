import { getFirestore } from "redux-firestore"

export const signIn=(credentials)=>{
    return (dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase()
        
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{dispatch({type: 'LOGIN_SUCCESS'})}).catch((err)=>{dispatch({type: 'LOGIN_ERROR', err})})
    }
}

export const signOut=()=>{
    return (dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase()

        firebase.auth().signOut().then(()=>{
            dispatch({type:'SIGNOUT_SUCCESS'})
        })
    }
}

export const  signUp=(newUser)=>{
    return(dispatch, getState, {getFirebase, getFirestore})=>{
        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp)=>{
            console.log(resp)
            return firestore.collection('users').doc(resp.user.uid).set({
                username: newUser.username,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                country: newUser.country,
                genre: newUser.genre,
                game: newUser.game,
                youtube: newUser.youtube,
                twitch: newUser.twitch,
                twitter: newUser.twitter,
                instagram: newUser.instagram,
                influencePoints: 0,
                rank:"Newb"
            })
        }).then(()=>{
            dispatch({type: "SIGNUP_SUCCESS"})
        }).catch(err =>{
            dispatch({type:'SIGNUP_ERROR', err})
        })
    }
}

export const addIP=(userId)=>{
    return(dispatch, getState, {getFirebase, getFirestore})=>{

        const firestore = getFirestore()
        let currentPoints = 0
        var docRef = firestore.collection('users').doc(userId)

        docRef.get().then(function(doc) {
            if (doc.exists) {

                currentPoints = doc.data().influencePoints
                var newRank = doc.data().rank
                currentPoints = currentPoints+1

                console.log(currentPoints)


                    if(currentPoints>25){newRank ="Common User"}
                    if(currentPoints>100){newRank ="Uncommon User"}
                    if(currentPoints>200){newRank ="Rare User"}
                    if(currentPoints>400){newRank ="Epic User"}
                    if(currentPoints>1000){newRank ="Legendary User"}
                    

                console.log()

                firestore.collection('users').doc(userId).update({
                    influencePoints: currentPoints,
                    rank: newRank
                }).then(()=>{
                dispatch({type: "ADDIP_SUCCESS"})
                }).catch(err =>{
                    dispatch({type:'ADDIP_ERROR', err})
                })
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }
}