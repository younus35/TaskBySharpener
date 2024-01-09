const input = document.createElement('input');
input.id='fruit-describe';
input.setAttribute('type','text');
const div = document.getElementsByTagName('div');
const ins = div[1].firstElementChild;
const bf = document.getElementById('add-btn');
ins.insertBefore(input,bf);
const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');
form.addEventListener('submit',function (event){
  event.preventDefault();
  const input1 = document.getElementById('fruit-to-add');
  const newli = document.createElement('li');
  const newlit = document.createTextNode(input1.value);
  newli.appendChild(newlit);
  newli.className = 'fruit';
  const p = document.createElement('p');
  const pt = document.createTextNode(input.value);
  p.style.fontStyle = "italic";
  p.appendChild(pt);
  p.id = "description";
  newli.appendChild(p);
  const deletebtn = document.createElement('button');
  const deletebtnt = document.createTextNode('x');
  deletebtn.appendChild(deletebtnt);
  deletebtn.className = 'delete-btn';
  newli.appendChild(deletebtn);
  fruits.appendChild(newli);
})
const filter = document.getElementById('filter');
filter.addEventListener('keyup',function(event){
  const textentered = event.target.value.toLowerCase();
  const fruititems = document.getElementsByClassName('fruit');
  for(let i=0;i<fruititems.length;i++){
    const currentfruit = fruititems[i].firstChild.textContent.toLowerCase();
    const currentfruit1 = fruititems[i].firstElementChild.textContent.toLowerCase();
    if((currentfruit.indexOf(textentered) ===-1) && (currentfruit1.indexOf(textentered) ===-1) ){
      fruititems[i].style.display = "none";
    }
    else{
      fruititems[i].style.display = "flex";
    }
  }
})