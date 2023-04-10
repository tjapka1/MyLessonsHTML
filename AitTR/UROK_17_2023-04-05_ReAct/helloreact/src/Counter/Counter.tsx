import React, {useState} from 'react';
import './Counter.css';
import Message from '../Message/Message';


function Counter(){
    //console.log(useState(0));
    
    const [count, setCount] = useState(0);
    const msg:string = " раз"

    function counterIncreaseHandler():void{setCount(count+1);}
    
    function counterMinHandler():void{
        //if(count===0) {setCount(0);}
        //else{count-1;}
        setCount(count-1);
    }

    function counterSetZerroHandler():void{setCount(0);}
    
    return (
    <div>
        
        <h1>Hello react</h1>
        <p>Вы нажали {count}{msg}</p>

        <button onClick={counterIncreaseHandler} type='button'>Нажми меня</button>
        <button onClick={counterMinHandler} type='button'>Удали один </button>
        <button onClick={counterSetZerroHandler} type='button'>Обнулятор</button>
        <Message num={count} msg1="Привет из каунтер" />

    </div>
            )
}

export default Counter;