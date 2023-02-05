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
        case "SET-MIN-VALUE": {
            const setMinValue = state.startValue >= 0 && state.startValue < state.maxValue
            return setMinValue ? {...state, startValue: state.startValue, current: state.startValue, error: ""}
                : {...state,startValue: action.startValue, current: state.startValue, error: "Incorrect value!!!"}
        }
        case "SET-MAX-VALUE": {
                return  (state.startValue >= 0 && state.maxValue > state.startValue) ?
                    {...state, startValue: state.maxValue, current: state.startValue, error: ""}
            : {...state,maxValue: action.maxValue, current: state.startValue, error: "Incorrect value!!!"}
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
    current: number,
    error: string
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

export const setMinValueAC = ( startValue: number, current: number, error: string): setMinValueActionType => {
    return {type: "SET-MIN-VALUE", startValue: 0, current: current, error: ''}
}

export const setMaxValueAC = ( maxValue: number, current: number): setMaxValueActionType => {
    return {type: "SET-MAX-VALUE", maxValue: 5, current: current}
}



