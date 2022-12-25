import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
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
        if(current === MaxValue) {
            setIncDisable(true)
            setResDisable(false)
        }
    }


    const buttonReset = () => {
        setCurrent(startValue)
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
        <Button ButtonCallBack={incrCurrent} className={"incr"} name={"incr"}/>
        <Button ButtonCallBack={buttonReset} className={"reset"} name={"reset"}/>
    </div>
  );
}

export default App;
