$(document).ready(function() {
    // All your jQuery will go here!
});

$('#menu_checkbox').click(function(){
   $('#nav-ul').toggleClass('show');
 });


$('#location').change(function() {
  validate(this.value);

});
  
$('#property-type').change(function() {
  validate(this.value);
 
});


$('#max-price').change(function() {
  validate(this.value);
 
});



function validate() {
  



  if (this.value !=='none') {
    console.log('true');
    console.log(this.value)
    
    console.log(selectedItems);
    
  }
   else if (this.value ==='none') {
    console.log('false');
    console.log(this.value)
    
    console.log(selectedItems);

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







		
		
	




  

