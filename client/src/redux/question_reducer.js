import { createSlice} from "@reduxjs/toolkit"
//  import _ from 'lodash'
export const questionReducer=createSlice({
    name:'questions',
    initialState:{
        queue:[],
        answers:[],
        trace:0,
    },
    reducers:{
        startExamAction:(state,action)=>{
            let{question,answers}=action.payload
            // let shuffledQuestions = _.shuffle(question)
            return{
                ...state,
                queue:question,
                // shuffledQuestions,
                answers
            }
        },
        moveNextAction:(state)=>{
            return{
                ...state,
                trace : state.trace +1
                
            }
        },
        movePrevAction:(state)=>{
           return{
                ...state,
                trace:state.trace-1
            }
        },
        resetAllAction:()=>{
            return{
                queue:[],
                answers:[],
                trace:0
            }
        }
    }
})

export const {startExamAction, moveNextAction, movePrevAction,resetAllAction}=questionReducer.actions;
export default questionReducer.reducer;
