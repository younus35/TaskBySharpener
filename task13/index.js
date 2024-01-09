function handleFormSubmit(event){
    event.preventDefault();
    const details = document.querySelector('.details');
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
     const myobj={
      username:name,
      email:email,
      phone:phone
    };
    let myobj_serialized = JSON.stringify(myobj);
    localStorage.setItem(email,myobj_serialized);
    const newli = document.createElement('li');
    const newlit = document.createTextNode(name+'-'+email+'-'+phone);
    newli.appendChild(newlit);
    const button = document.createElement('button');
    const buttont = document.createTextNode('delete');
    button.appendChild(buttont);
    button.onclick = () =>{
      localStorage.removeItem(email);
      details.removeChild(newli);
    }
    newli.appendChild(button);
    details.appendChild(newli);
    
  }
  module.exports=handleFormSubmit;