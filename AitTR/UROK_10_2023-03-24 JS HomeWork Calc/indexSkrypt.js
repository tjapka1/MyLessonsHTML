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
    let stack=[];

    let brackets = {
        ')':'(',
        '}':'{',
        ']':'[',
    }
    for( let i = 0; i<s.length; i++){
        const current = s[i];
        if(isClosedBreak(current)){
            if(brackets[current] !== stack.pop()) return false;
    }else{checkTextIn
        stack.push(current);
    }
}
    return stack.length === 0;
}

function isClosedBreak(ch){
    return [')','}',']'].indexOf(ch) > -1;
}

function isValid2(s){
    
    let count = 0;

    for( let i = 0; i<s.length; i++){
        if (s[i] == '(') {
            count++;
        }
        if (s[i] == ')') {
            count=count-1;
            function isClosedBreak(ch){
        }
        if(count<0){

            break;
        }
        console.log(count);
        if(count >0){return false;}
        else if(count <0){return false;}
        else if(count==0){return true;}
    }
}
}


console.log(s1, isValid2(s1));
console.log(s1, isValid(s1));
console.log(s2, isValid(s2));
console.log(s3, isValid(s3));
console.log(s4, isValid(s4));
console.log(s5, isValid(s5));
console.log(s6, isValid(s6));



document.querySelector('#next').onclick  = function (){ 
var fN=document.querySelector('#firstName').value;
var lN=document.querySelector('#lastName').value;
console.log(fN +" "+ lN);
new AddUser(fN, lN)
}

// let allUser={
//     firstName;
//     lastName=
// }
function AddUser(firstName, lastName ) {
    this.firstName=firstName;
    this.lastName=lastName;

}