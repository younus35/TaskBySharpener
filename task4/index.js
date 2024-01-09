//querySelector is used to slect only a single element
const mainHeading = document.querySelector('#main-heading');//for id use # and for class name use .main-heading
mainHeading.style.textAlign = "right";
const basketheading = document.querySelector('#basket-heading');
basketheading.style.color = "brown";
basketheading.style.marginLeft = '30px';
const fruits = document.querySelector(".fruits");
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50px';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';
//querySelectorAll is used to select is used to grab all the elements wwith the same tag/class
const evenfruititems = document.querySelectorAll(".fruit");
for(let i=0;i<evenfruititems.clientHeight;i=i+2){
    evenfruititems[i].style.backgroundColor='white';
    evenfruititems[i].style.padding = '10px';
    evenfruititems[i].style.margin = '10px';
    evenfruititems[i].style.borderRadius='5px';
}
const oddfruititems = document.querySelectorAll(".fruit");
for(let i=1;i<oddfruititems.clientHeight;i=i+2){
    oddfruititems[i].style.backgroundColor='red';
    oddfruititems[i].style.padding = '10px';
    oddfruititems[i].style.margin = '10px';
    oddfruititems[i].style.borderRadius='5px';
}
