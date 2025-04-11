document.addEventListener("DOMContentLoaded",()=>{
    const menu = document.getElementById("menu");
    const nav = document.getElementById("navigation");

    menu.addEventListener("click",(e)=>{
        e.preventDefault();
        menu.classList.toggle("show");
        nav.classList.toggle("show-nav");
    });
});




