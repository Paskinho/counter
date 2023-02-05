import React from "react";
import {store} from "./store";

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



export const counterReducer = (state: InitialStateType = initialState,action: ActionsType): InitialStateType=> {
    switch (action.type) {
        case "INCREMENT-CURRENT-VALUE":{
            const checkStartValue = state.current < state.maxValue;
            return checkStartValue ?
                {...state, current: state.current + 1, error: ""}
                : {...state, error: "Incorrect Value"}
        }
        case "RESET-VALUE" : {
            return {...state, current: state.startValue, error:''}
        }
        case "SET-EDT-MODE": {
            return {...state, isEditMode: action.isEditMode}
        }
        default:
            return state;
    }
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
    error: string
}
export type resetValueActionType = {
    type: "RESET-VALUE",
    current: number,
    error: string

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


export const incrCurrentAC = (maxValue: number, current: number, error: string): incrCurrentValueActionType => {
    return {type: "INCREMENT-CURRENT-VALUE", maxValue: 5, current: current, error: ""}
}

export const resetValueAC = ( current: number, error: string): resetValueActionType => {
    return {type: "RESET-VALUE", current: current, error: ""}
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



