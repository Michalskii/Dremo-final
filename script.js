$(document).ready(function() {
    // All your jQuery will go here!
});

$('#menu_checkbox').click(function(){
   $('#nav-ul').toggleClass('show');
 });

 let search = [];
         
     
const selectLocation = document.getElementById('location');
const selectType = document.getElementById('property-type');
const selectPrice = document.getElementById('max-price');

selectLocation.addEventListener('change', validate);
selectType.addEventListener('change', validate);
selectPrice.addEventListener('change', validate);

function validate() {
if (
selectLocation.value ==='none' || 
selectType.value ==='none' || 
selectPrice.value ==='none') { 
  $('#btn').click(function(event){
    event.preventDefault();
    console.log('prevented default')
    console.log(selectLocation.value)
    
  });
}

 if (selectLocation.value ==='none') {
  $('.alert').addClass('show')
  
} else {
  $('.alert').removeClass('show')
}

if (selectType.value ==='none') {
  $('#propType').addClass('show')
  
} else {
  $('#propType').removeClass('show')
}

if (selectPrice.value ==='none') {
  $('#maxPrice').addClass('show')
  
} else {
  $('#maxPrice').removeClass('show')
}



}

$('#btn').click(validate);



 $("#submit-mail").click(function(){
        let  email = $("#email").val(); 
        if (!email) {
          $('#email').attr('placeholder', 'Please enter email');
        }
        else if(email.indexOf("@") < 0 || email.indexOf(".") < 0){
          $('.emailMsg').toggleClass('show');
          $('#email').val('');
         

$('#email').attr('placeholder', '');
          } else  {
            console.log(email);
            $('#email').val('Thank you!');
            $('.emailMsg').toggleClass('show');
          }
        
  
        
      
    });



$(".exploreMore").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#videoSection").offset().top
    }, 2000);
});







		
		
	




  

