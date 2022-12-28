import React from "react";

type ButtonType = {
    ButtonCallBack: () => void
    className: string
    name: string
    incDisable: boolean
    setToLocalStorageHandler: () => void
    getFromLocalHandler: ()=> void


}

export const Button = (props: ButtonType) => {

    return (
        <div className="button">
            <button className={props.className}
                    onClick={props.ButtonCallBack}
            disabled={props.incDisable}>
                {props.name}
            </button>
            <button onClick={props.setToLocalStorageHandler}></button>
            <button onClick={props.getFromLocalHandler}></button>
        </div>
    );

}

