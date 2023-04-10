type ParamTypeName={num:number, msg1:string};


function Message(p:ParamTypeName){
    return(
        <div>
        <p>blahu ... но вы нажали {p.num} раз</p>
        <p>{p.msg1}</p>
        </div>
    );
}


export default Message;