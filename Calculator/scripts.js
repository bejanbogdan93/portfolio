let memory;
let clearOutputBoolean=false;
let operatorNumber=0;
let decimalPoint=false;

function number(theValue){
    var actualValue=parseFloat(document.getElementById("outputScreen").value);
    
        if (clearOutputBoolean){
            document.getElementById("outputScreen").value = "";
            clearOutputBoolean=false;
        }

        if (actualValue == "0") {
            document.getElementById("outputScreen").value = theValue;
            }else{
                document.getElementById("outputScreen").value += theValue;
            }

}

function clearOutput(){
    document.getElementById("operatorScreen").innerHTML = "";
    document.getElementById("outputScreen").value = "0";
    memory = null;
    operatorNumber = 0;
    decimalPoint=false;
}

function squared(){
    document.getElementById("operatorScreen").innerHTML = document.getElementById("outputScreen").value + "&sup2";
    document.getElementById("outputScreen").value *= document.getElementById("outputScreen").value;
}

function percent(){
   // document.getElementById("operatorScreen").innerHTML = "&percnt;";
    document.getElementById("outputScreen").value *= 0.01;
}

function operator(operatorType, operatorSimbol){
    memory = parseFloat(document.getElementById("outputScreen").value);
    operatorNumber = operatorType;
    clearOutputBoolean = true;
    document.getElementById("operatorScreen").innerHTML = operatorSimbol;
}
function changeSign(){
    document.getElementById("outputScreen").value = 
        parseFloat(document.getElementById("outputScreen").value) * -1;
}

function decimal(){
    if (!decimalPoint){
        document.getElementById("outputScreen").value += ".";
        decimalPoint = true;
    }

}

function result(){
    if (clearOutputBoolean==false && memory != null){
        switch (operatorNumber){
            case 1: //plus
                document.getElementById("outputScreen").value = 
                    parseFloat(document.getElementById("outputScreen").value) + memory;
                break;
            case 2: //minus
                document.getElementById("outputScreen").value = memory -
                    parseFloat(document.getElementById("outputScreen").value);
                break;
            case 3: //times
                document.getElementById("outputScreen").value = memory *
                    parseFloat(document.getElementById("outputScreen").value);
                break;
            case 4: //divide
                document.getElementById("outputScreen").value = memory /
                    parseFloat(document.getElementById("outputScreen").value);
                break;
            default:
                alert("Strange operand!");
        }
        //document.getElementById("outputScreen").value = parseFloat(memory)
    }
}
