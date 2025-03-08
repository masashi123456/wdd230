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

