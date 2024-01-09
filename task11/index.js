function handleFormSubmit(event){
    event.preventDefault();
    const myobj = {
      username:event.target.username.value,
      email:event.target.email.value,
      phone:event.target.phone.value
    }
    const myobj_serialized = JSON.stringify(myobj);
   localStorage.setItem("User Details",myobj_serialized);
  }
  module.exports=handleFormSubmit;
  