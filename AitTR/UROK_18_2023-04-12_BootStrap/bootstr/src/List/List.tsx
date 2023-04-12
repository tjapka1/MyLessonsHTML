import React, {useState} from "react";

function List() {

  let names:string[] =["Jack", "John", "Lena", "Ann", "Vad"]
  const[selecteindex, setselecteindex]=useState(0);
  
return (
    <>
        <h1>
            Список студентов
        </h1>
        {/*names.length===0 ? <p>Нет студентов</p> : null*/} 
        {names.length===0 && <p>Нет студентов</p>}
        <ul className="list-group">
             {names.map((strName:string, index:number) => (
             
             <li 
              className={
                index === selecteindex?
                "list-group-item active":"list-group-item"} 

              key={strName}
              onClick={()=>{
                setselecteindex(index);
                console.log(index, strName);
                
              }}
            >
                {strName}
             </li>))}
        </ul>
        
        <button type="button" className="btn btn-outline-primary">Primary</button>
    </>
    );
}

export default List;