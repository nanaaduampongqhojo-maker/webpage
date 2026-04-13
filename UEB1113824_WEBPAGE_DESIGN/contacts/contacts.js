window.addEventListener("scroll", function(){

let header = document.querySelector("header");

if(window.scrollY > 50){
header.style.background = "#f4f4f4";
}
else{
header.style.background = "white";
}

});