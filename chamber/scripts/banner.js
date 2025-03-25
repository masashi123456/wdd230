const today = new Date();
const dayWeek= today.getDay();
if(dayWeek>=1&&dayWeek<=3){
    document.getElementById('attendBanner').style.display = "block";
}

document.getElementById("closeBun").addEventListener("click", ()=>{
    document.getElementById("attendBanner").style.display = "none";
})