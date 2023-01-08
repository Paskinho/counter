import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Button} from "./components/Button";
import {CounterSetting} from "./components/CounterSetting";
import s from './components/CounterSetting.module.css'



export type StateType = {
    startValue: number,
    maxValue: number,
    current: number
    error: string
}


function App() {

    const [state, setState] = useState<StateType>({startValue: 0,maxValue: 5, current: 0, error: ""} )

    const [incDisable, setIncDisable] = useState<boolean>(false)
    const [resDisable, setResDisable] = useState<boolean>(true)



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

    const incrCurrent = () => {
        if (state.current < state.maxValue) {
            return setState({...state,current: state.current + 1, error: ''});
        }
        if (state.current === state.maxValue) {
            setIncDisable(true)
            setResDisable(false)
        }
    }


    const buttonReset = () => {
        setState({...state, current: state.startValue, error: ""})
    }






    return (
        <div className="App">
            <Counter
                state={state}
                current={state.current}
                // incDisable={incDisable}
                // resDisable={resDisable}
            />
            <Button incDisable={(state.current === state.maxValue)}
                    ButtonCallBack={incrCurrent}
                    className={"incr"}
                    name={"incr"}/>
            <Button incDisable={(state.current === state.startValue)} //нужно resDisable
                    ButtonCallBack={buttonReset}
                    className={"reset"}
                    name={"reset"}/>

        </div>
    );
}

export default App;
