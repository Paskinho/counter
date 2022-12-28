import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Button} from "./components/Button";


function App() {

    const [incDisable, setIncDisable] = useState<boolean>(false)
    const [resDisable, setResDisable] = useState<boolean>(true)

    const startValue: number = 0
    const MaxValue: number = 5
    const [current, setCurrent] = useState<number>(startValue)

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

    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(current))
        localStorage.setItem('counterValue' + 1,JSON.stringify(current + 1) )

    }
    const getFromLocalHandler = () => {
        let valueAsString = localStorage.getItem('counterValue');
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCurrent(newValue)
        }
    }

    const clearLocalStorage = () => {
        localStorage.clear()
        setCurrent(0)
    }

   const removeItemFromLocalStorage = ()=> {
        localStorage.removeItem('counterValue' + 1)
    }


    return (
        <div className="App">
            <Counter
                current={current}
                incrCurrent={incrCurrent}
                buttonReset={buttonReset}
                incDisable={incDisable}
                resDisable={resDisable}
            />

            <Button incDisable={(current === MaxValue)}
                    ButtonCallBack={incrCurrent}
                    className={"incr"}
                    name={"incr"}
                    setToLocalStorageHandler={setToLocalStorageHandler}
                    getFromLocalHandler={getFromLocalHandler}
                    clearLocalStorageHandler={clearLocalStorage}
                    removeItemFromLocalStorageHandler={removeItemFromLocalStorage}/>
            <Button incDisable={(current === startValue)}
                    ButtonCallBack={buttonReset}
                    className={"reset"}
                    name={"reset"}
                    setToLocalStorageHandler={setToLocalStorageHandler}
                    getFromLocalHandler={getFromLocalHandler}
                    clearLocalStorageHandler={clearLocalStorage}
                    removeItemFromLocalStorageHandler={removeItemFromLocalStorage}/>
        </div>
    );
}

export default App;
