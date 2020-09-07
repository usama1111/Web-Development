
//Sign up and login form using firebase authentication


function signup(){

var email = document.getElementById("signup-email");

var password = document.getElementById("signup-pass");

console.log(email.value)
console.log(password.value)

firebase.auth().createUserWithEmailAndPassword(email.value, password.value)

.then((result) => {


document.getElementById("demo").innerHTML = "Signup Sucessfully"


})



.catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...

    console.log(error)
  });email-password.html

}



function login(){

    var email = document.getElementById("login-email");

    var password = document.getElementById("login-pass");
    

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    
    .then((result) => {


        document.getElementById("demo").innerHTML = "login Sucessfully"
        
        
        })
            
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        alert(error)
      });email-password.html


}

