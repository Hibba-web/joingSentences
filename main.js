var inputs = [];
 function getPara1() {
      
    for( var i = 1 ; i <= 6; i++){
        inputs.push(document.getElementById("input" + i ).value);
    }

    inputs.join(" ");
    document.getElementById("showPara1").innerHTML = inputs.join(" ");
 }