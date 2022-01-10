const petCounter = (state = 10 , action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case "PET_INCREASE" : 
            return state + action.payload

        case "PET_DECREASE" :
            return state - 1;

        default :
         return state
    }
}

export default petCounter;