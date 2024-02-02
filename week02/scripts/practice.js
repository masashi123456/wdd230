const input = documet.querySelector('#favchap');
const button = documet.querySelector('button');
const list = documet.querySelector('#list');

button.addEventListener('click', () => {'...'});
if (input.value != '') {'...' };

const li = createElement('li');
const deleteButton = document.createElement('button') ;
button.addEventListner('delete');
li.innerHTML = input.value;
deleteButton.innerHTML = ('❌');
li.append(deleteButton);
list.apeen(li);
deleteButton.addEventListener('click', function (){
    list.removeChild(li);
    input.focus();
})

input.focus();
input.value('');




