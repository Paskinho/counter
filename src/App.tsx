import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Button} from "./components/Button";
import {CounterSetting} from "./components/CounterSetting";
import s from './components/CounterSetting.module.css'

type StateType = {
    startValue: number,
    maxValue: number,
    current: number
}


function App() {

    const [state, setState] = useState<StateType>({startValue: 0,maxValue: 5, current: 0} )

    const [incDisable, setIncDisable] = useState<boolean>(false)
    const [resDisable, setResDisable] = useState<boolean>(true)





    useEffect(()=>{
        getFromLocalHandler()
    },[])

    useEffect(()=>{
        localStorage.setItem('counterValue', JSON.stringify(state.current))
        },[state.current]
    )

    const incrCurrent = () => {
        if (state.current < state.MaxValue) {
            return state.setCurrent(state.current + 1);
        }
        if (state.current === state.MaxValue) {
            setIncDisable(true)
            setResDisable(false)
        }
    }


    const buttonReset = () => {
        state.setCurrent(state.startValue)
    }


    const getFromLocalHandler = () => {
        let valueAsString = localStorage.getItem('counterValue');
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            state.setCurrent(newValue)
        }
    }



    return (
        <div className="App">
            <Counter
                current={state.current}
                // incDisable={incDisable}
                // resDisable={resDisable}
            />
            <Button incDisable={(state.current === state.MaxValue)}
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
