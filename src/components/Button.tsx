import React from "react";

type ButtonType = {
    ButtonCallBack: () => void
    className: string
    name: string
}

export const Button = (props: ButtonType) => {
    const {ButtonCallBack, name, className}=props
    return (
        <div className="button">
            <button className={className}
                    onClick={ButtonCallBack}>
                {name}
            </button>
        </div>
    );

}

