const languageReducer = (state = {language: ''}, action) => {
if(action.type === 'LANGUAGE'){
return { language: action.data }
}
return state
}

export { languageReducer }