let serverSchool = false;

let promise = new Promise(function(resolve, reject){
    console.log("отправляем данные в Школу");

    if(serverSchool){

        setTimeout(()=>{

            let school = {
                tite:"ait-tr", 
                site:"ait-tr.de",
                phone:"+493052014182", 
                email:"go@ait-tr.de" 
            }
            resolve(school)},7000);
        }else{
            setTimeout(()=>reject ("сервак на отдыхе!"), 3000);
    }
    
});

promise.then(
    function(school){
        console.log("отправлено");
        console.log(school);
    }
);

promise.catch(
    function(error){
        console.log("Ощибка сервака");
        console.log(error);
    }
);