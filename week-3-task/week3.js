

function btnclick(number){
    document.getElementById("screen").value+=number;
}
function clearDisplay(){
    document.getElementById('screen').value="";
 }

function negetive(){
    document.getElementById('screen').value="-";
}
function equalClick(){
    var text = document.getElementById('screen').value;
    var result= eval(text);
    document.getElementById("screen").value= result;
}