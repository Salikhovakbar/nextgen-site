const languageReducer = (state = {language: ''}, action) => {
if(action.type === 'LANGUAGE'){
return { language: action.data }
}
return state
}

const testReducer = (state = {level: '', stage_level: '',grammar: [], reading: [], vocabulary: []}, action) => {
if(action.type === 'TEST'){
    return {testData: action.data}
}
else return state
}

const testLevelReducer = (state = {level: '', section: ''}, action) => {
    if(action.type === 'LEVEL'){
    return { level: action.data }
    }
    else return state
}

export { languageReducer, testReducer, testLevelReducer }