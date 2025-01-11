const currentYearElement = document.querySelector('#year');
const currentYear = new Date().getFullYear();
currentYearElement.innerHTML = `&copy;${currentYear}`;

const lastModifiedElement = document.querySelector("#lastModified");
const lastModified = document.lastModified;
lastModifiedElement.innerHTML = `Last Modified: <em>${lastModified}</em>`;

