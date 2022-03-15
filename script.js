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
















