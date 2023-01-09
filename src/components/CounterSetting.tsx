import React, {ChangeEvent, useState} from "react";
import {StateType} from "../App";

type CounterSettingType = {
    state: StateType
    setEditMode: (isEditMode: boolean)=> void
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
}

export const CounterSetting: React.FC<CounterSettingType> = (props)  => {

    const MaxNumberForCounter = (e:ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+e.currentTarget.value)
    }

    const MinNumberForCounter = (e:ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(+e.currentTarget.value)
    }

    return <div>
        <div>
        <input onChange={MaxNumberForCounter} value={props.state.maxValue}/>
        </div>
        <div>
            <input onChange={MinNumberForCounter} value={props.state.startValue}/>
        </div>

    </div>
}