import React from "react";
import './TextOu.css';

type Props = {msg:string};

function TextOu({msg}:Props){
  return (

  <div className="ouTextbody">
    <div className="label">
        Вы ввели в поле:
    </div>
    <div className="ouText">
      {msg}
    </div>    
      
  </div>
      
)
}

export default TextOu;