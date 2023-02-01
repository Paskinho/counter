import React from "react";
import s from './Button.module.css'

type ButtonType = {
    ButtonCallBack: () => void
    className?: string
    name: string
    disable?: boolean

}

export const Button = (props: ButtonType) => {

    return (
        <div className={s.button}>
            <button className={props.className}
                    onClick={props.ButtonCallBack}
            disabled={props.disable}>
                {props.name}
            </button>
        </div>
    );

}
