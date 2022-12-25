import React from "react";

type ButtonType = {
    ButtonCallBack: () => void
    className: string
    name: string

}

export const Button = (props: ButtonType) => {

    return (
        <div className="button">
            <button className={props.className}
                    onClick={props.ButtonCallBack}>
                {props.name}
            </button>
        </div>
    );

}

