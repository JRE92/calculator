function suma(){
    let num1 = parseInt(document.getElementById("n1").value);
    let num2 = parseInt(document.getElementById("n2").value);
    let resu = num1+num2;
    document.getElementById("re").innerHTML = resu;

    //document.getElementById("s1").value = "suma";
}
function resta(){
    let num1 = parseInt(document.getElementById("n1").value);
    let num2 = parseInt(document.getElementById("n2").value);
    let resu = num1-num2;
    document.getElementById("re").innerHTML = resu;
    // document.getElementById("s2").value = "rest";
}
function multi(){
    let num1 = parseInt(document.getElementById("n1").value);
    let num2 = parseInt(document.getElementById("n2").value);
    let resu = num1*num2;
    document.getElementById("re").innerHTML = resu;
    // document.getElementById("s3").value = "mult";
}
function divi(){
    let num1 = parseInt(document.getElementById("n1").value);
    let num2 = parseInt(document.getElementById("n2").value);
    let resu = num1/num2;
    document.getElementById("re").innerHTML = resu;
    // document.getElementById("s4").value = "div";
}
function igual(){
    document.getElementById("s5").value = "igual";
}