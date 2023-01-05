import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Button} from "./components/Button";
import {CounterSetting} from "./components/CounterSetting";
import s from './components/CounterSetting.module.css'


function App() {

    const [incDisable, setIncDisable] = useState<boolean>(false)
    const [resDisable, setResDisable] = useState<boolean>(true)

    const startValue: number = 0
    const MaxValue: number = 5
    const [current, setCurrent] = useState<number>(startValue)


    useEffect(()=>{
        getFromLocalHandler()
    },[])

    useEffect(()=>{
        localStorage.setItem('counterValue', JSON.stringify(current))
        },[current]
    )

    const incrCurrent = () => {
        if (current < MaxValue) {
            return setCurrent(current + 1);
        }
        if (current === MaxValue) {
            setIncDisable(true)
            setResDisable(false)
        }
    }


    const buttonReset = () => {
        setCurrent(startValue)
    }


    const getFromLocalHandler = () => {
        let valueAsString = localStorage.getItem('counterValue');
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCurrent(newValue)
        }
    }



    return (
        <div className="App">
            <Counter
                current={current}
                // incDisable={incDisable}
                // resDisable={resDisable}
            />
            <Button incDisable={(current === MaxValue)}
                    ButtonCallBack={incrCurrent}
                    className={"incr"}
                    name={"incr"}/>
            <Button incDisable={(current === startValue)} //нужно resDisable
                    ButtonCallBack={buttonReset}
                    className={"reset"}
                    name={"reset"}/>

        </div>
    );
}

export default App;
