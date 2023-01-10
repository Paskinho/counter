import React, {ChangeEvent, useState} from "react";
import {StateType} from "../App";
import s from './CounterSetting.module.css'

type CounterSettingType = {
    state: StateType
    setEditMode: (isEditMode: boolean)=> void
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
}

export const CounterSetting: React.FC<CounterSettingType> = (props)  => {


    const MinNumberForCounter = (e:ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(+e.currentTarget.value)
    }

    const MaxNumberForCounter = (e:ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+e.currentTarget.value)
    }

    // let inputMaxClass;
    // if(props.state.maxValue>props.state.startValue && props.state.startValue>=0) inputMaxClass=`${s.input}`
    // else inputMaxClass=`${s.input} ${s.inputError}`
    //
    // const classFunc = () => {
    //     if (props.state.startValue >= 0 && props.state.startValue < props.state.maxValue) {
    //         return `${s.input}`
    //     } else return `${s.input} ${s.inputError}`
    // }
    // const inputMinClass = classFunc();

    return <div>
        <div>
            Max. Value:
            <input onChange={MaxNumberForCounter} value={props.state.maxValue}/>
        </div>
        <div>
            Min. Value:
            <input onChange={MinNumberForCounter} value={props.state.startValue}/>
        </div>


    </div>
}