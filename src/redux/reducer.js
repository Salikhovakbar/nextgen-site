const languageReducer = (state = {language: ''}, action) => {
if(action.type === 'LANGUAGE'){
return { language: action.data }
}
return state
}

const tokenReducer = (state = {userId: ''}, action) => {
    if(action.type === 'TOKEN_ID'){
        return { userId: action.data }
    }
    else return state
}

export { languageReducer, tokenReducer }