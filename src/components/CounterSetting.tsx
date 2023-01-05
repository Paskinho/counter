import React, {useState} from "react";

type CounterSettingType = {

}

export const CounterSetting = (props: CounterSettingType) => {
    const [currentValue,setCurrentValue] = useState<number>(20)
    const startValue = 0
    // const maxValueForCounter = setMaxValue(10)

    const MaxNumberForCounter = () => {

        if (currentValue < 0) {
            return "error"
        }
        return setCurrentValue (currentValue + 1)
    }

    const MinNumberForCounter = () => {

        if (currentValue < 0) {
            return "error"
        }
        return setCurrentValue (currentValue + 1)
    }

    return <div>
        <button onClick={MaxNumberForCounter}/>
        <button onClick={MinNumberForCounter}/>

    </div>
}