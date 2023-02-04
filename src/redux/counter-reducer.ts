import React from "react";

type InitialStateType = {
    startValue: number,
        maxValue: number,
        current: number,
        error: string,
        isEditMode: boolean
}


const initialState: InitialStateType = {
    startValue: 0,
    maxValue: 5,
    current: 5,
    error: "error",
    isEditMode: true
}



export const counterReducer = ()=> {

}

export type ActionsType = incrCurrentActionType ;

export type incrCurrentActionType = {
    type: "INCREMENT-CURRENT-VALUE",
    maxValue: number,
    current: number
}