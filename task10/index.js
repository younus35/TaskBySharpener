function myFunction(event){
    event.preventDefault();
    const inp1 = event.target.uname.value;
    const inp2 = document.getElementById('email').value;
    const inp3 = document.getElementById('phno').value;
    localStorage.setItem("Username",inp1);
    localStorage.setItem("email",inp2);
    localStorage.setItem("phone number",inp3);
    }
    module.exports = myFunction;