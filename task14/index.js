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
    const edit = document.createElement('button');
    const editt = document.createTextNode('edit');
    edit.appendChild(editt);
    edit.onclick = () =>{
      localStorage.removeItem(email);
      details.removeChild(newli);
      document.getElementById('username').value = name;
      document.getElementById('email').value = email;
      document.getElementById('phone').value =phone;
    }
    newli.appendChild(edit);
    details.appendChild(newli);
    
  }
  module.exports=handleFormSubmit;