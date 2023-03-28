document.querySelector('#clear').onclick = function clean(){
    document.form1.textview1.value = "";
}
document.querySelector('#clearRes').onclick = function clean(){
    document.form2.textview2.value = "";
}
document.querySelector('#clearAll').onclick = function cleanAll(){
    document.form1.textview1.value = "";
    document.form2.textview2.value = "";
}

document.querySelector('#solwe').onclick = function solve(){
    var exp = document.form1.textview1.value;
    if(exp){
        document.form2.textview2.value = eval(exp);
    }
}
function insert(num){
    document.calc.calcview.value=
    document.calc.calcview.value + num;
}
function clean() {
    document.calc.calcview.value = "";
}
function back(){
    var exp = document.calc.calcview.value;
    document.calc.calcview.value = exp.substring(0, exp.length - 1);
}
function equal(){
    var exp = document.calc.calcview.value;
    if(exp) {
        document.calc.calcview.value = eval(exp);
    }

}
document.querySelector('#checkTextIDBtn').onclick = function checkString(){
    var cs=document.querySelector('.checkTextIn').value;
    var check=isValid(cs);
    document.checktextRes.resview.value = check;

}



let s1= '()';
let s2 = '()[]{}';
let s3 = '(]';
let s4 = '{[]}';
let s5 = '([)]';
let s6 = '{[[]{}]}()()';


function isValid (s){

    const stack=[];
    const openBrackets={};

    openBrackets["{"]="}";
    openBrackets["("]=")";
    openBrackets["["]="]";

    const closeBrackets={};
    closeBrackets["}"]="{";
    closeBrackets[")"]="(";
    closeBrackets["]"]="[";


    for(let i=0; i<s.length; i++){
        const char = s.charAt(i);
        if(char in openBrackets){
            stack.push(openBrackets[char]);
        } else if(char in closeBrackets){
            const lastCloseBracket = stack.pop();
            if (lastCloseBracket !== char) return false;
        }
    }
    return stack.length===0;
}


console.log(s1, isValid(s1));
console.log(s1, isValid(s1));
console.log(s2, isValid(s2));
console.log(s3, isValid(s3));
console.log(s4, isValid(s4));
console.log(s5, isValid(s5));
console.log(s6, isValid(s6));



// document.querySelector('#next').onclick  = function (){ 
// var fN=document.querySelector('#firstName').value;
// var lN=document.querySelector('#lastName').value;
// console.log(fN +" "+ lN);
// new AddUser(fN, lN)
// }

// // let allUser={
// //     firstName;
// //     lastName=
// // }
// function AddUser(firstName, lastName ) {
//     this.firstName=firstName;
//     this.lastName=lastName;

// }


const nextBtn= document.getElementById("btn_next");
const finishBtn= document.getElementById("btn_finish");
const inputFirstName= document.getElementById("firstName");
const inputLastName= document.getElementById("lastName");
const users=[];



nextBtn.addEventListener("click", ()=>{
    const firstName = inputFirstName.value.trim();
    const lastName = inputFirstName.value.trim();
console.log(firstName +" " + lastName);

    if(firstName!=="" & lastName!==""){
        createUser(firstName,lastName);
        inputFirstName.value="";
        inputLastName.value="";
        console.log(users);
    }
});

finishBtn.addEventListener( "click",()=>printUsersList());



const createUser= function(firstName,lastName){
    if(firstName!=="" & lastName!==""){
        const user ={
            firstName,
            lastName
        };

        users.push(user);
    }
}

function printUsersList(){
    const resultBlock= document.getElementById("result");
    if(users.length>0){
        let html=`<h2>User List</h2><ol class="user-list">`;
        users.forEach((e)=>{
           html+=`<li>${e.firstName} ${e.lastName}</li>`     
        } );
        html+="</ol>";
        resultBlock.innerHTML=html;
    }
}