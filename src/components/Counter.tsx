import React, {ChangeEvent, KeyboardEvent, useReducer, useState} from 'react';
import s from "./CounterSetting.module.css";
import {CounterSetting} from "./CounterSetting";

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
                <CounterSetting/>
            </div>
        </div>
    );
}

