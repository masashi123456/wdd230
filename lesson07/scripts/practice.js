const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
})

button.addEventListener('click', (e)=>{
    //prevent the default action of the button
    e.preventDefault();

    if (input.value !=''){
        //Declare elements
        displayList(input.value);
        chaptersArray.psh(input.value);
        setChapterList();
        input.value='';
        input.focus();
    }

        
        
        

});

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chapterArray = chapterArray.filter((item)=> item !==chapter);
    setChapterList();
}
function displayList(item){
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent=input;
    deleteButton.textContent='❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function (){
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
    console.log('aaa')
    
}

function setChapterList(){
    localStorage.setItem('myFavBOMList', JSON.stringify(chapterArray));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}








