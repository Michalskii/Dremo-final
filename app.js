const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

let search = [];


const addSearched = (ev) => {

let searched =  {
    location: document.getElementById('location').value,
    propertyType: document.getElementById('property-type').value,
    maxPrice: document.getElementById('max-price').value

}

console.log(searched)
search.push(searched);
console.log(search);
}

 document
        .getElementById('btn')
        .addEventListener('click', addSearched);
  



           
        
        

const emailSubmitted = (ev) => {

let emailAdress = {
    email: document.getElementById('email').value
}
console.log(emailAdress);
}

 document
            .getElementById('submit-mail')
            .addEventListener('click', emailSubmitted);

