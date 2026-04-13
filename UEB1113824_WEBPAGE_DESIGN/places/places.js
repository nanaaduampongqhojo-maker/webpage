window.addEventListener("scroll",function(){
    let header = document.querySelector("header");
    if (window.scrollY>50) {
        header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";        
    } else {
        header.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
    }
})