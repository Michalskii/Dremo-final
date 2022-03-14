$(document).ready(function() {
    // All your jQuery will go here!
});

$('#menu_checkbox').click(function(){
   $('#nav-ul').toggleClass('show');
 });



// $('.form').on('change', validate);
// $('#btn').on('click', btnValidate);
$('.form-field').on('change', validateForm);
$('#btn').on('click', handleFormSubmit);

function handleFormSubmit() {
  const isFormValid = validateForm();
  console.log('submit', { isFormValid })
  // return & show messages if not valid
  // generate formData if valid
}

function showFieldError(fieldId) {
  const errorContainer = $(`[data-field-id='${fieldId}']`);
  console.log({ errorContainer });
}

function validateForm() {
  const formFields = $('.form-field');
  const fieldSValidations = [];

  formFields.each((index, field) => {
    const isFieldValid = $(field).val() !== '';
    if(!isFieldValid) showFieldError($(field).attr('id'));
    fieldSValidations.push(isFieldValid);
  });

  return !fieldSValidations.includes(false);
}



function btnValidate() {
  let loc = $('#location').val();
  let type = $('#property-type').val();
  let price = $('#max-price').val();

  if (loc ==='none') {

    $("#location").prev().addClass('show');
    event.preventDefault();

    if (type ==='none') {

      $("#property-type").prev().addClass('show');
      event.preventDefault();


      if (price ==='none') {

        $("#max-price").prev().addClass('show');
        event.preventDefault();


      }

    }

    }
    else {


      getDataForm();

      $('#location',).prop('selectedIndex',0);
      $('#property-type',).prop('selectedIndex',0);
      $('#max-price',).prop('selectedIndex',0);
      // let myForm = document.getElementById('myForm');
      // let formData = new FormData(myForm);
      // console.log(formData)

    }








};

function getDataForm()  {

  let formData = new FormData();
  formData.append('Location', $('#location').val());
  formData.append('Property type', $('#property-type').val());
  formData.append('Max price', $('#max-price').val() )
  console.log(Array.from(formData));

}


function validate() {

let id = $(this).attr("data-id");
  if (this.value !=='none') {

    $("#"+id).siblings().removeClass('show');
  }
   else if (this.value ==='none') {

    $("#"+id).siblings().addClass('show');

  };
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
















