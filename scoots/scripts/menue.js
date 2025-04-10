document.addEventListener("DOMContentLoaded",()=>{
    const menu = document.getElementById("menu");
    const nav = document.getElementById("navigation");

    menu.addEventListener("click",(e)=>{
        e.preventDefault();
        menu.classList.toggle("show");
        nav.classList.toggle("show-nav");
    });
});

/*function myFunction(){
    var x = document.querySelectorAll('nav a');
    x.forEach(d=>{

        if(x.style.display === "block"){
            x.style.display="none";
        }else{
            x.style.display = "block"
        }
    })
}

const nav = document.querySelector('.navigation')
const respbutton = document.querySelector('#menu');

respbutton.addEventListener('click', ()=>{
    nav.classList.toggle('show');
    respbutton.classList.toggle('show');
})*/