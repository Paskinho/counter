import React from 'react';
import {Button} from "./Button";
import {StateType} from "../App";
import s from "./ButtonsCounter.module.css"

type ButtonsCounterType = {
    state: StateType
    isEditMode: boolean
    setEditMode: (isEditMode: boolean) => void
    incrCurrent: ()=> void
    buttonReset: ()=> void
}

const ButtonsCounter: React.FC<ButtonsCounterType> = (props) => {

    const buttonSet = () => {
        props.setEditMode(props.isEditMode)
    }

    return (
        <div>
            {props.isEditMode ?
                <div>
                <Button className={s.button} ButtonCallBack={buttonSet} name={'SET'}/>
                </div>
                :
                <div>
            <Button disable={(props.state.current === props.state.maxValue)}
                    ButtonCallBack={props.incrCurrent}
                    className={s.button}
                    name={"INCR"}/>
            <Button disable={(props.state.current === props.state.startValue)} //нужно resDisable
                    ButtonCallBack={props.buttonReset}
                    className={s.button}
                    name={"RESET"}/>

            <Button
                className={s.button}
                ButtonCallBack={buttonSet}
                    name={"SET"}/>
                </div>
            }
        </div>
    );
};

export default ButtonsCounter;