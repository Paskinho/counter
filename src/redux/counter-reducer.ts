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

export type ActionsType = incrCurrentValueActionType
    | resetValueActionType
    | setEditModeActionType
    | setMinValueActionType
    | setMaxValueActionType;

export type incrCurrentValueActionType = {
    type: "INCREMENT-CURRENT-VALUE",
    maxValue: number,
    current: number
}
export type resetValueActionType = {
    type: "RESET-VALUE",
    current: number
}

export type setEditModeActionType = {
    type: "SET-EDT-MODE",
    isEditMode: boolean
}

export type setMinValueActionType = {
    type: "SET-MIN-VALUE",
    startValue: number,
    current: number
}

export type setMaxValueActionType = {
    type: "SET-MAX-VALUE",
    maxValue: number,
    current: number
}
