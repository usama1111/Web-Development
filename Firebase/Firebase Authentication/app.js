// var elem = document.querySelector('#cloud');
// console.log("bantoo babab")
// var animatedElem = elem.animate([
//   { transform: 'translate(0,20px)' },
//   { transform: 'translate(550px,80px)' },
//   { transform: 'translate(80vw,20px)' },
//   { transform: 'translate(550px,80px)' },
//   { transform: 'translate(0,20px)' },

// ], {
//   duration: 15000,
//   iterations: Infinity
// })

// document.addEventListener("mousedown", ()=>{
//   animatedElem.pause();
// })

// document.addEventListener("mouseup", ()=>{
//   animatedElem.play();
// })


function facebook(){

  var provider = new firebase.auth.FacebookAuthProvider();

  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    var user = result.user;
document.getElementById("name").innerHTML = user.displayName;
    // ...
  }).catch(function(error) {
    console.log(error.message);
  });


}