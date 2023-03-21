


const text=document.querySelector('.bodytext1')



document.querySelector("#colorText").addEventListener("click", ()=>{
    text.style.color = "red";
}
);

document.querySelector("#sizeText").addEventListener("click", ()=>{
    text.style.fontSize = "54px";
}
);



document.querySelector("#reset").addEventListener("click", ()=>{
    text.style.fontSize = "18px";
    text.style.color = "black"
}
);
