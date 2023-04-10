import './TextIn.css';
import TextOu from '../TextOu/TextOu';

function TextIn(){



  return (
  <div >
    <div className="body">
      <div className="inTextDiv">
          <input type="text" name='inText' className='inText' id='inText' placeholder='Введите Текст' />
      </div>

    </div>
  </div>
)
}

export default TextIn;