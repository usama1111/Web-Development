function getNumber(num){

var results = document.getElementById('results');
results.value += num;

}

function clearResult(){

var results = document.getElementById("results");

results.value = ""


}
function getResult() {
    var results = document.getElementById("results");
    results.value = eval(results.value)
}