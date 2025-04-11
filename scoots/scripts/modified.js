const currYear = document.getElementById("year");
currYear.textContent = new Date().getFullYear();

const lastModifiedElement = document.getElementById("lastModified");
const lastModified = document.lastModified;
lastModifiedElement.textContent = `Last Modified: ${lastModified}`;