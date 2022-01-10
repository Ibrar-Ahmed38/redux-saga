const initialState = {
    users : [],
    loading : false,
    error : null,
};     

const users = (state = initialState , action)=>{
    switch(action.type){
        case  "GET_USER_REQUESTED" : 
        return {...state, loading : true}

        case "GET_USER_SUCESS" : 
        return {...state, loading : false}

        case "GET_USER_FAILED" : 
        return {...state, loading : false , error : action.message}
        
        default : 
        return state

    }
}

export default users