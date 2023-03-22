


const text1=document.querySelector('#bodytext1');

const text2=document.querySelector('#bodytext2');

const text3=document.querySelector('#bodytext3');

const text4=document.querySelector('#bodytext4');



document.getElementById("sizeTextPlus").addEventListener("click", ()=>{
const alltext=document.querySelectorAll('.sizeText');
alltext.forEach((e) =>{
    let fs=window.getComputedStyle(e).fontSize;
    fs = parseInt(fs)+5 +"px";
    e.style.fontSize=fs;
});
});

document.getElementById("sizeTextMinus").addEventListener("click", ()=>{
    const alltext=document.querySelectorAll('.sizeText');
    alltext.forEach((e) =>{
        let fs=window.getComputedStyle(e).fontSize;
        fs = parseInt(fs)-5 +"px";
        e.style.fontSize=fs;
    });
    });
    
document.getElementById("resetStand").addEventListener("click", ()=>{
    const alltext=document.querySelectorAll('.sizeText');
    alltext.forEach((e)=>{
        e.style.fontSize="18px";
    })
    });



document.querySelector("#colorText").addEventListener("click", ()=>{
    text1.style.color = "red";
    text2.style.color = "blue";
    text3.style.color = "green";
    text4.style.color = "yellow";
}
);

document.querySelector("#sizeText").addEventListener("click", ()=>{
    text1.style.fontSize = "54px";
    text2.style.fontSize = "54px";
    text3.style.fontSize = "34px";
    text4.style.fontSize = "44px";
}
);


document.querySelector("#reset").addEventListener("click", ()=>{
    text1.style.fontSize = "18px";
    text1.style.color = "black";

    text2.style.fontSize = "18px";
    text2.style.color = "black";

    text3.style.fontSize = "18px";
    text3.style.color = "black";

    text4.style.fontSize = "18px";
    text4.style.color = "black";
}
);
