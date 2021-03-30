function Number() {
    if(event.target.id == "."){
        if((document.getElementById("display1").value).indexOf(".") > -1 || document.getElementById("display1").value == ""){
            alert("Impossible to increase the comma in these circumstances!");
        }
        else{
            document.getElementById("display1").value += event.target.id;
        }
    }else{
        document.getElementById("display1").value += event.target.id;
    }
}

function Clear() {
    document.getElementById("display1").value = "";
    document.getElementById("display2").value = "";
}

function Symbol() {
    if(document.getElementById("display1").value != ""){
        var N = document.getElementById("display1").value;
        if(document.getElementById("display2").value == ""){
            document.getElementById("display2").value = N + event.target.id;
        }else{
            var N1 = "";
            var N2 = "";
            var S = "";
            var E = true;
            document.getElementById("display2").value += N
            var str = document.getElementById("display2").value;
            for(var x = 1; x <= str.length; x++){
                var a = str.substring(x-1, x);
                if(x == 1 && a == "-"){
                    N1 = N1 + str.substring(x-1, x);
                }else{
                    if(a == "-" || a == "*" || a == "+" || a == "/"){
                        E = false;
                        S = a;
                    }else{
                        if(E == true){
                            if(N1 == ""){
                                N1 = str.substring(x-1, x);
                            }else{
                                N1 = N1 + str.substring(x-1, x);
                            }
                        }else{
                            if(N2 == ""){
                                N2 = str.substring(x-1, x);
                            }else{
                                N2 = N2 + str.substring(x-1, x);
                            }
                        } 
                    }
                }
            }

            switch (S){
                case "-":
                    var result = parseFloat(N1) - parseFloat(N2);
                    break;
                case "*":
                    var result = parseFloat(N1) * parseFloat(N2);
                    break;
                case "/":
                    var result = parseFloat(N1) / parseFloat(N2);
                    break;
                case "+":
                    var result = parseFloat(N1) + parseFloat(N2);
                    break;
            }

            document.getElementById("display2").value = result + event.target.id;
        }
        document.getElementById("display1").value = "";
    }else{
        alert("At least one value!");
    }
    
}

function Equal() {
    if(document.getElementById("display1").value != "" && document.getElementById("display2").value != ""){
        var N1 = "";
        var N2 = "";
        var S = "";
        var str = document.getElementById("display2").value;
        for(var x = 1; x <= str.length; x++){
            var a = str.substring(x-1, x);
            if(a == "-" || a == "*" || a == "+" || a == "/"){
                S = a;
            }else{
                if(N1 == ""){
                    N1 = str.substring(x-1, x);
                }else{
                    N1 = N1 + str.substring(x-1, x);
                }
            }
        }

        if(S != ""){
            switch (S){
                case "-":
                    var result = parseFloat(N1) - parseFloat(document.getElementById("display1").value);
                    break;
                case "*":
                    var result = parseFloat(N1) * parseFloat(document.getElementById("display1").value);
                    break;
                case "/":
                    var result = parseFloat(N1) / parseFloat(document.getElementById("display1").value);
                    break;
                case "+":
                    var result = parseFloat(N1) + parseFloat(document.getElementById("display1").value);
                    break;
            }

            Clear();
            document.getElementById("display2").value = result;
        }else{
            alert("Enter some value!");
            Clear();
        }
    }else{
        alert("Enter a second value!");
    }
}