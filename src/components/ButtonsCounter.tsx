import React from 'react';
import {Button} from "./Button";
import {StateType} from "../App";

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
            <Button disable={(props.state.current === props.state.maxValue)}
                    ButtonCallBack={props.incrCurrent}
                    className={"incr"}
                    name={"INCR"}/>
            <Button disable={(props.state.current === props.state.startValue)} //нужно resDisable
                    ButtonCallBack={props.buttonReset}
                    className={"reset"}
                    name={"RESET"}/>
            <Button ButtonCallBack={buttonSet}
                    name={"SET"}/>
        </div>
    );
};

export default ButtonsCounter;