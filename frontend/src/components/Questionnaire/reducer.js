export const initialState = {
    questions:[{questionText: "Question", questionType:"radio",type:"text", options : [{option: ""}], open: true, required:false}],
    questionType:"radio",
}

export const actionTypes = {
      SET_QUESTIONs:"SET_QUESTIONS",
      CHANGE_TYPE:"CHANGE_TYPE",
      SET_DOC_NAME:"SET_DOC_NAME",
      SET_DOC_DESC:"SET_DOC_DESC"
      
}

const reducer = (state, action)=>{
    console.log(action);
    
    switch(action.type){
        case actionTypes.SET_QUESTION : 
            return {
                ...state, questions:action.questions,
            };
        case actionTypes.CHANGE_TYPE : 
            return {
                ...state, questionType:action.questionType,
            }; 
        case actionTypes.SET_DOC_NAME : 
            return {
                ...state, doc_name:action.doc_name,
            };
            
        case actionTypes.SET_DOC_DESC: 
            return {
                ...state, doc_desc:action.doc_desc,
            };     
        default:
            return state;    
    }
}

export default reducer;