// Your code goes here
// change logo color
 const logo = document.querySelector ("h1.logo-heading");

 logo.addEventListener("mouseover", function (event){
     event.target.style.color ="red";
 });
 logo.addEventListener("mouseleave", function (event){
     event.target.style.color ="black";
 });

