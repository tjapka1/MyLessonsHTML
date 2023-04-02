const url= "https://aws.random.cat/meow"
const btnNext = document.querySelector("#btn-next");
const btnPlay = document.querySelector("#btn-play");
const btnStop = document.querySelector("#btn-stop");
const btnLast5 = document.querySelector("#btn-last5");
const catImg = document.querySelector("#cat-img");

console.log(btnNext);
console.log(catImg);

function getLinkToImage(){
    return new Promise( function(resolve, reject){
        
        const responsePromise= fetch(url);
        
        responsePromise.then((responseData)=>{
             console.log(responseData);   
             
             responseData.json().then((data)=> {
                console.log(data);
                resolve(data.file);    
             })  
        });
    } );
}

function changeImage(){
    const isDone= catImg.complete;
    if(isDone){
        getLinkToImage().then((data)=>{
        catImg.src=data;     
        });
    };
    console.log("play");
}

function play(){
let playInter=window.setInterval(changeImage, 1000);
return playInter;
}

function stop(){
    let playInter=play();
    window.clearInterval(playInter);
    }

function last5Image(){
console.log("last5");
}

btnNext.addEventListener("click", changeImage);
btnPlay.addEventListener("click", play);
btnStop.addEventListener("click", stop);
btnLast5.addEventListener("click", last5Image);