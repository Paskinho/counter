import React from 'react';
import s from "./CounterSetting.module.css";
import {CounterSetting} from "./CounterSetting";
import { StateType } from '../App';
import ButtonsCounter from "./ButtonsCounter";
import CounterWindow from "./CounterWindow";

// const countReducer = (state: number, action: any): number => {
//     switch (action.type) {
//         case "INC":
//             return state + 1
//         case "RES":
//             return 0
//         case "SET":
//             return action.value
//         default:
//             return state
//     }
// }


type CurrentType = {
    current?: number
    incDisable?: boolean
    resDisable?: boolean
    state: StateType
    setEditMode: (isEditMode: boolean)=> void
    setMinValue: (value: number)=> void
    setMaxValue: (value: number)=> void
    incrCurrent: ()=> void
    buttonReset: ()=> void
}


export const Counter = (props: CurrentType) => {
    // const startValue: number = 0

    const CurrentClassName = (props.current === 5) ? `table tableBlock` : "table"
    const Message = (props.current === 5) ? props.current : props.current

    // const [value, dispatchValue]=useReducer(countReducer, 0)

    // const setLocalStorage = ()=> {
    //     dispatchValue({type: "SET", value: startValue})
    // }

    return (
        <div className={CurrentClassName}>
            {Message}
            <div className={s.CounterSetting}>
                <CounterSetting
                state={props.state}
                setEditMode={props.setEditMode}
                setMaxValue={props.setMaxValue}
                setMinValue={props.setMinValue}
                />
                <ButtonsCounter
                state={props.state}
                isEditMode={props.state.isEditMode}
                setEditMode={props.setEditMode}
                incrCurrent={props.incrCurrent}
                buttonReset={props.buttonReset}
                />
                <CounterWindow value={props.state.error === 'Incorrect value!' ?
                    props.state.error : props.state.current}
                               maxValue={props.state.maxValue}/>
            </div>
        </div>
    );
}

