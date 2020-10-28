// Your code goes here
// change logo color
 const logo = document.querySelector ("h1.logo-heading");

 logo.addEventListener("mouseover", function (event){
     event.target.style.color ="red";
 });
 logo.addEventListener("mouseleave", function (event){
     event.target.style.color ="black";
 });

// Welcome to the Fun Bus!
const bus = document.querySelector(".intro h2").addEventListener('click', function (event){
    let h = document.createElement("h2");
    h.textContent= "Let's go on an adventure!";
    event.target.appendChild(h);
    event.stopPropagation();
 });

//  change text color with keydown
 document.addEventListener("keydown", function(event){
     if(event.key === "p"){
       event.target.style.color = "purple";  
     }
     else{
         event.target.style.color = "black";
     }
 })


// let's go title- alert
let letsGo = document.querySelector(".content-section .img-content")

letsGo.addEventListener('dblclick', function(event){
    alert("Your Adventure Awaits!");
});

// Adventure Awaits title
let adventure = document.querySelector(".inverse-content .text-content h2");

adventure.addEventListener('focus', function(event){
    event.target.style.background = "yellow";
});

// buttons
// let button = document.querySelector(".content-pick.destination.btn");
//  button




