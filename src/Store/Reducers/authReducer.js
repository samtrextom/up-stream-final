const initState={
    authError:null
}

const authReducer=(state=initState, action)=>{
    
    switch(action.type){
        case 'LOGIN_ERROR': console.log('login error')
        return {
            ...state,
            authError: 'Login Failed'
        }
        case 'LOGIN_SUCCESS': console.log('login successful')
        return{
            ...state,
            authError:null
        }
        case 'SIGNOUT_SUCCESS': console.log('signout success')
        return state
        case 'SIGNUP_SUCCESS':console.log('signup success')
        return{
            ...state,
            authError:null
        }
        case 'SIGNUP_ERROR':console.log('signup error') 
        console.log(action.err)
        return{
            ...state,
            authError:action.err.message
        }
        case 'ADDIP_SUCCESS':console.log('add IP success')
        return state
        case 'ADDIP_ERROR':console.log('add IP error') 
        console.log(action.err)
        return state
        default: return state
    }
}

export default authReducer