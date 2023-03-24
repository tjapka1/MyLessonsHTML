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

}2
