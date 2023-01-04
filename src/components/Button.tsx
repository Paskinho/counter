import React from "react";

type ButtonType = {
    ButtonCallBack: () => void
    className: string
    name: string
    incDisable?: boolean
    resDisable?: boolean
    setToLocalStorageHandler?: () => void
    getFromLocalHandler?: ()=> void
    clearLocalStorageHandler?: ()=> void
    removeItemFromLocalStorageHandler?: ()=> void

}

export const Button = (props: ButtonType) => {

    return (
        <div className="button">
            <button className={props.className}
                    onClick={props.ButtonCallBack}
            disabled={props.incDisable}>
                {props.name}
            </button>
        </div>
    );

}
