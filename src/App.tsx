import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";

import s from './components/CounterSetting.module.css'



export type StateType = {
    startValue: number,
    maxValue: number,
    current: number,
    error: string,
    isEditMode: boolean

}


function App() {

    const [state, setState] = useState<StateType>({startValue: 0,maxValue: 5, current: 0, error: "", isEditMode: false} )

    // const [incDisable, setIncDisable] = useState<boolean>(false)
    // const [resDisable, setResDisable] = useState<boolean>(true)



    const getFromLocalHandler = () => {
        let valueAsString = localStorage.getItem('counterValue');
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setState({...newValue, current: newValue.newValue})
        }
    }

    useEffect(()=>{
        getFromLocalHandler()
    },[])

    useEffect(()=>{
        localStorage.setItem('counterValue', JSON.stringify(state))
        },[state]
    )



    const setEditMode = (isEditMode: boolean) => {
        setState({...state, isEditMode: !isEditMode})
    }

    const setMinValue = (startValue: number) => {
        if (startValue >= 0 && startValue < state.maxValue ) {
            return setState({...state, startValue: startValue, current: startValue, error: ""})
        }
        return setState({...state,startValue, current: state.startValue, error: "Incorrect value!!!"})
    }

    const setMaxValue = (maxValue: number) => {
        if (state.startValue >= 0 && maxValue > state.startValue)  {
            return setState({...state, startValue: maxValue, current: state.startValue, error: ""})
        }

        return setState({...state,maxValue, current: state.startValue, error: "Incorrect value!!!"})
    }


    return (
        <div className="App">
            <Counter
                state={state}
                setEditMode={setEditMode}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
                // incDisable={incDisable}
                // resDisable={resDisable}
            />


        </div>
    );
}

export default App;
