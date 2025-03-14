document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("form").addEventListener("focusout", function(event){

        const pas1 = document.querySelector("#password");
        const pas2 = document.querySelector("#password2");
        const pmsg = document.querySelector("#pmessage");
        if(pas1.value&&pas1.value){

            if(pas1!=null&&pas1.value !== pas2.value){
                event.preventDefault();
                pmsg.style.color = "red"
                pmsg.textContent="The password does not match."
                pas2.value ="";
                pas2.focus();
        
            }else{
                pmsg.textContent = "The password is verified!!"
                pmsg.style.color="blue";
            }
        }
    })
});