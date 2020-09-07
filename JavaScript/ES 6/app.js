 
  // Topic 1
// Template literals 

let name = "usama";
let last_name = "sohail";


console.log(`my name is ${name} ${last_name}`)

// ` back tick is used for templates literals


//Topic 2
//Spread Operators (...)


var obj = {

 name : "usama",
 email : "usamasohail@gmail.com"

}

var obj2 = {...obj,school : "saylani"}

console.log(obj2);



//Topic 3
//Object Destructuring

var object = {

First_name : "usama",
Email : "usama@gmail.com"
}

let {First_name,Email} = object;

console.log(First_name);

//Topic 4
//Turniry Operator

var age = 45;

 var check = age  > 50 ? "is greater " : "is shorter" 

console.log(check)


//Topic 5 
//Sync and ASync


console.log("start");

setTimeout(function(){
console.log("its Async");
},1000)

console.log("end")


//Topic 6
//Promise

var practice = new Promise(function(resolve,reject){

if(true){

setTimeout(() =>{

resolve("its resolve")

},3000)
}

else{

  reject("its reject")
}
}
)

console.log(practice)
practice.then(function(data){
    console.log("Resolve==>",data)
})
.catch(function(error){
    console.log("Error==>",error)
})


//Topic 7 
//Arrow function


let foo = () =>{

setTimeout(() =>{


console.log("its bantoo baba")

},2000)


}

foo()
