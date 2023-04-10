import './TextOu.css';
type Param = {msg:string};

function TextOu(p:Param){



  return (

  <div >
    <div className="body">
      <p>
        Вы ввели в поле:
      </p>

      <div className="ouTextDiv">
        <p>
          
        </p>   
          
      </div>      
    </div>
  </div>
      
)
}

export default TextOu;