const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');
form.addEventListener('submit',function (event){
  event.preventDefault();
  //select input element
  const input = document.getElementById('fruit-to-add');
  //created li method
  const newli = document.createElement('li');
  const newlit = document.createTextNode(input.value);
  newli.appendChild(newlit);
  newli.className = 'fruit';
//create buttons
  const deletebtn = document.createElement('button');
  const deletebtnt = document.createTextNode('x');
  deletebtn.appendChild(deletebtnt);
  deletebtn.className = 'delete-btn';
  newli.appendChild(deletebtn);
  const editbtn = document.createElement('button');
  const editbtnt = document.createTextNode('Edit');
  editbtn.appendChild(editbtnt);
  editbtn.className = 'edit-btn';
  newli.appendChild(editbtn);
  //appended
  // or we can use inner html method 
  //newli.innerHTML = input.value + '<button class="delete-btn">x</button>
  // <button class="edit-btn">Edit</button>'
  fruits.appendChild(newli);
})
//delete functionailty
fruits.addEventListener('click',function(event){
  //event.target is used when clicked on exact content
  if(event.target.classList.contains('delete-btn')){
   const fruitdelete =  event.target.parentElement;
    fruits.removeChild(fruitdelete);
  };
})
