
function calc(){
    var weight = document.getElementById("input_weight").value
    var height = document.getElementById("input_height").value

    var result = weight/(Math.pow(height,2))
    console.log(result)
    document.getElementById("display_BMI").innerHTML = result

    //printing message 
    if(result <= 18.5){
        var message = "Warning! You are in low BMI range!";
        return document.getElementById("display_Message").innerHTML = message; 
    }

    else if(18.0< result && result <= 24.9){
        var message = "Congrats! You are healthy!";
        return document.getElementById("display_Message").innerHTML = message;
         
    }

    else if(result>=25){
        var message = "Warning! You are overweight!";
        return document.getElementById("display_Message").innerHTML = message; 
    }

} //end calc()