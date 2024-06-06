const section= document.querySelector('section');
let height = 400;
let width = 300;
document.querySelector('button')
    .addEventListener('click',()=>{
        height +=1;
        width +=1;
        
        section.innerHTML += 
            `<article>
                <img src="https://place.dog/${width}/${height}" alt="dog">
            </article>`
    })