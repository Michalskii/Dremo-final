$(document).ready(function() {
    // All your jQuery will go here!
});

$('#menu_checkbox').click(function(){
   $('#nav-ul').toggleClass('show');
 });

 let ds;

$('#location').change(function() {
  validate(this.value);
ds = $('#loc');
});
  
$('#property-type').change(function() {
  validate(this.value);
 ds = $('#propType'); 
});




$('#max-price').change(function() {
  validate(this.value);
 ds = $('#maxPrice');
});



function validate(selected) {
  
  if (selected !=='none') {
    console.log('true');
    console.log(selected)
    $(ds).removeClass('show');
    
    
  }
   else if (selected ==='none') {
    console.log('false');
    console.log(selected)
    $(ds).addClass('show');
    

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







		
		
	




  

