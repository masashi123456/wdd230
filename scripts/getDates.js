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

