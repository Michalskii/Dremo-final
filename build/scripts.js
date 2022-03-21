// const hamburger = document.getElementById('menu_checkbox');
// const navUl = document.getElementById('nav-ul');

// hamburger.addEventListener('click', () => {
//     navUl.classList.toggle('show');
// });



// $('#btn').click(function(){
//    $('#nav-ul').toggleClass('show');
//  });


//  $('#btn').click(function() {
//      let searched = {
//          location: $('#location').val(),
//          propertyType: $('#property-type').val(),
//          maxPrice : $('#max-price').val()
         
         
//          )
//      }
//  }

// let search = [];


// const addSearched = (ev) => {

// let searched =  {
//     location: document.getElementById('location').value,
//     propertyType: document.getElementById('property-type').value,
//     maxPrice: document.getElementById('max-price').value

// }

// console.log(searched)
// search.push(searched);
// console.log(search);
// }

//  document
//         .getElementById('btn')
//         .addEventListener('click', addSearched);
  



           
        
        

// const emailSubmitted = (ev) => {

// let emailAdress = {
//     email: document.getElementById('email').value
// }
// console.log(emailAdress);
// }

//  document
//             .getElementById('submit-mail')
//             .addEventListener('click', emailSubmitted);



            
// const numbers = [28, 77, 45, 99, 27];
 
// numbers.forEach(number => {  
//   console.log("your lucky number is " + number);
// }); 


module.exports = function(grunt) {
// config

    grunt.initConfig({
        concat: {
            js:  {
                src: ['*.js'],
                dest: 'build/scripts.js'
            },
            css: {
                src: ['*css'], 
                dest: 'build/styles.css'
            }

       
        }

});
// load plugins
grunt.loadNpmTasks('grunt-contrib-concat');


// register taks



};
$(document).ready(function() {
    // All your jQuery will go here!
});

$('#menu_checkbox').click(function(){
   $('#nav-ul').toggleClass('show');
 });




$('.form-field').on('change', validateForm);
$('#btn').on('click', handleFormSubmit);

function handleFormSubmit() {
  const isFormValid = validateForm();
  
if (isFormValid) {
  getDataForm();
}
else {
  console.log('not valid')
}

}

function showFieldError(fieldId) {
  const errorContainer = $(`[data-field-id='${fieldId}']`);
  $(errorContainer).addClass('show')
  
}

function validateForm() {
  const formFields = $('.form-field');
  const fieldSValidations = [];
  
  formFields.each((index, field) => {
    const isFieldValid = $(field).val() !== '';
    if(!isFieldValid) showFieldError($(field).attr('id'));
    else {
      removeFieldError($(field).attr('id'));
    }
    fieldSValidations.push(isFieldValid);
  
  } 
  );
  

  return !fieldSValidations.includes(false)

}

function removeFieldError(fieldId) {
  const errorContainer = $(`[data-field-id='${fieldId}']`);
   $(errorContainer).removeClass('show')
}


function getDataForm()  {

  let formData = new FormData();
  formData.append('Location', $('#location').val());
  formData.append('Property type', $('#property-type').val());
  formData.append('Max price', $('#max-price').val() )
  console.log(Array.from(formData));

}





function mailValidate() {
  let mailInput = $('#email').val();
  var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
if (testEmail.test(mailInput))

{
  console.log(mailInput)
  removeMailError();
}
    
else
    
    {console.log('not mail')
    showMailError();
  }}

function showMailError() {
  $('#mailMessage').html("Please enter valid email adress")
}

$('#submit-mail').click(function() {
mailValidate();



})
function removeMailError() {
  $('#mailMessage').html("")
}



$(".exploreMore").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#videoSection").offset().top
    }, 2000);
});
















