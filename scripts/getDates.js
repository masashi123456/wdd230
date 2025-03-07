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

const countElement = document.querySelector(".view_count");
let viewCount = localStorage.getItem("viewPage");

if(!viewCount){
    viewCount=0;
}

viewCount = Number(viewCount)+1;
countElement.textContent = viewCount;
localStorage.setItem("viewPage", viewCount);

