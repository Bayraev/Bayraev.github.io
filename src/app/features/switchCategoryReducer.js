import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
    category: "easy",
}

export const easy = createAction('easy')
export const normal = createAction('normal')
export const hard = createAction('hard')

const switchCategoryReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(easy, (state)=>{
            state.category = "easy"
        })
        .addCase(normal, (state)=>{
            state.category = "normal"
        })
        .addCase(hard, (state)=>{
            state.category = "hard"
        })
})


export default switchCategoryReducer