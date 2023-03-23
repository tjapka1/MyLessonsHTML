document.getElementById("fontSizePlus").addEventListener("click", ()=>{
    const allText=document.querySelectorAll('.text-main');
    allText.forEach((e)=>{
        // let fs=window.getComputedStyle(e).fontSize;
        // fs=parseInt(fs)30"px";
        e.style.fontSize="30px";
    })

})

document.getElementById("fontSizeMinus").addEventListener("click", ()=>{
    const allText=document.querySelectorAll('.text-main');
    allText.forEach((e)=>{
        // let fs=window.getComputedStyle(e).fontSize;
        // fs=parseInt(fs)30"px";
        e.style.fontSize="18px";
    })

})