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



export const counterReducer = (action: ActionsType)=> {

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


export const incrCurrentAC = (maxValue: number, current: number): incrCurrentValueActionType => {
    return {type: "INCREMENT-CURRENT-VALUE", maxValue: 5, current: current}
}

export const resetValueAC = ( current: number): resetValueActionType => {
    return {type: "RESET-VALUE", current: current}
}

export const setEditModeAC = ( isEditMode: boolean): setEditModeActionType => {
    return {type: "SET-EDT-MODE",  isEditMode: true}
}

export const setMinValueAC = ( startValue: number, current: number): setMinValueActionType => {
    return {type: "SET-MIN-VALUE", startValue: 0, current: current}
}

export const setMaxValueAC = ( maxValue: number, current: number): setMaxValueActionType => {
    return {type: "SET-MAX-VALUE", maxValue: 5, current: current}
}



