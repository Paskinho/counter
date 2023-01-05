import React, {useState} from "react";

type CounterSettingType = {

}

export const CounterSetting = (props: CounterSettingType) => {
    const [maxValue,setMaxValue] = useState<number>(20)

    // const maxValueForCounter = setMaxValue(10)

    const MaxNumberForCounter = () => {
        let startValue = 0
        if (startValue < 0) {
            return "error"
        }
        return startValue + 1
    }

    return <div>
        <input onChange={MaxNumberForCounter}/>
        <input onChange={MaxNumberForCounter}/>

    </div>
}