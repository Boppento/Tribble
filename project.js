
console.log("ohello");

window.onload = function() {
    document.getElementById("button1").onclick = function(){

        console.log("WAT");
        document.getElementById("demo").innerHTML = "thanks for clicking";
        
    };

    function myFunctionAdd(randomVariable, randomVariable2) {
        return randomVariable + randomVariable2;
    }

}