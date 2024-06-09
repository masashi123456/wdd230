const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', (e)=>{
    //prevent the default action of the button
    e.preventDefault();

    if (input.value){
        //Declare elements
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        //declare values inside of the element
        li.textContent=input.value;
        deleteButton.textContent='❌';
        
        
        li.appendChild(deleteButton);
        list.appendChild(li);

        deleteButton.addEventListener('click', ()=>{
           
            list.removeChild(li);
            input.focus();
        })

        input.focus();
        input.value = '';


    }else{
        input.focus();
    }

});






