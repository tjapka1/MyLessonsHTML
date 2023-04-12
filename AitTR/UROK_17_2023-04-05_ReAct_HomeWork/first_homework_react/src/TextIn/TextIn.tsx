import React, {useState} from 'react';
import './TextIn.css';
import TextOu from '../TextOu/TextOu';


const TextIn = () => {
  let [value, setValue] = useState<string>("");
  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>): void {
    setValue(event.target.value);

  }
  return (
    <div className="inTextbody">
      <div className="label">
        Введите Текст
    </div>
      <div className="inTextDiv">
          <textarea value={value} onChange={handleChange} name='inText' className='inText' id='inText' placeholder='Введите Текст' />
          <TextOu msg ={value}/>
          
      </div>

    </div>
  
)
}

export default TextIn;