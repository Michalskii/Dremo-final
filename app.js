const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

let search = [];




 document.addEventListener('DOMContentLoaded', ()=>{
            document
            .getElementById('btn')
            .addEventListener('click', addSearched);
        }
        );
const addSearched = (ev) => {

let searched = {
    location: document.getElementById('location').value,
    propertyType: document.getElementById('property-type').value,
    maxPrice: document.getElementById('max-price').value

}
search.push(searched);
console.log(searched)
}
  

