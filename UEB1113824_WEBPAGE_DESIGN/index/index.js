const links = document.querySelectorAll("nav a");
links.forEach(link =>{
    link.addEventListener("click", function(){
        links.forEach(l =>l.classList.remove("active"));
        this.classLists.add("active");
    });
});

window.addEventListener("scroll", function(){
    let header = this.document.querySelector("healer");
    if(this.window.scrollY > 50){
        header.computedStyleMap.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    }else{
        header.computedStyleMap.boxShadow = "none";
    }
});