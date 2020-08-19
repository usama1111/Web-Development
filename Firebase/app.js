
function myFunction() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
       x.type = "text";


    } else {
      x.type = "password";
    }
  }





function saveData() {
    var pass = document.getElementById("pass");
    var email = document.getElementById("email");
    
    var key = firebase.database().ref('student').push().key
    var student = {
    
        email: email.value,
         pass :  myFunction(),
        key : key
    }



    firebase.database().ref('student/' + key).set(student)
}

// save data to firebase


// function getFirebaseData(){
//    firebase.database().ref('student').on('child_added',function(data){
//        console.log(data.val())
//    })
// }


// getFirebaseData();

// get firebase data to console


// function editdatabase(){

// firebase.database().ref('student/-MF-wVJbPJnJBN6UgFj8's).set({

// name : "ramesh",
// key : '-MF-wVJbPJnJBN6UgFj8',
// roll :  322
// })
// }
// editdatabase();


//edit firebase database



// function removedatabase(){


// firebase.database().ref('student').remove()


// }

// removedatabase();


// function removeFirebaseData(){
//     firebase.database().ref('student').remove()
// }

// removeFirebaseData();


