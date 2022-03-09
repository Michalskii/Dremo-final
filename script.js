$(document).ready(function() {
    // All your jQuery will go here!
});

$('#menu_checkbox').click(function(){
   $('#nav-ul').toggleClass('show');
 });



$('.form').on('change', validate);
$('#btn').on('click', btnValidate);



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
  console.log(mailInput);
  $('#mailMessage').text("das");
}




$('#submit-mail').click(function() {
mailValidate();


})



$(".exploreMore").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#videoSection").offset().top
    }, 2000);
});







		
		
	




  

