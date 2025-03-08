const countElement = document.querySelector(".view_msg");
let lastView = localStorage.getItem("lastView");

const today = new Date();
const now = today.getTime();

if(!lastView){
    countElement.textContent = "Welcome! Let us know if you have any questions.";
    localStorage.setItem("lastView", now);
}else{
    const lastVisit = Number(lastView);
    const diffTime = now - lastVisit;
    const diffDay = Math.floor(diffTime/(1000*3600*24));

    if(diffDay<=1){
        countElement.textContent = "Back so soon! Awesome!"
    }else{
        const days = diffDay === 1?"day":"days";
        countElement.textContent = `You last visited ${diffDay} ${days} ago.`
    }
    localStorage.setItem("lastView", now);
}



const currentYearElement = document.querySelector('#year');
const currentYear = new Date().getFullYear();
currentYearElement.innerHTML = `&copy;${currentYear}`;

const lastModifiedElement = document.querySelector("#lastModified");
const lastModified = document.lastModified;
lastModifiedElement.innerHTML = `Last Modified: <em>${lastModified}</em>`;

document.addEventListener("DOMContentLoaded",()=>{
    const menu = document.getElementById("menu");
    const nav = document.querySelector(".navigation1");

    menu.addEventListener("click",(e)=>{
        e.preventDefault();
        menu.classList.toggle("show");
        nav.classList.toggle("show-nav");
    });
});

function myFunction(){
    var x = document.getElementById("navigation");
    if(x.style.display === "block"){
        x.style.display="none";
    }else{
        x.style.display = "block"
    }
}

const nav = document.querySelector('.navigation')
const respbutton = document.querySelector('#rmenu');

respbutton.addEventListener('click', ()=>{
    nav.classList.toggle('show');
    respbutton.classList.toggle('show');
})


const dark = document.querySelector(".dark input");
const disp = document.getElementById("discover");

dark.addEventListener('click', ()=>{
    if(disp.textContent.includes("")){
      disp.style.background = "black";   
    }
});

