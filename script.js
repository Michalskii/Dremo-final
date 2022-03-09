$(document).ready(function() {
    // All your jQuery will go here!
});

$('#menu_checkbox').click(function(){
   $('#nav-ul').toggleClass('show');
 });



$('.form').on('change', validate);

let child = document.getElementById('location');
let child2 = child.previousElementSibling;
function validate() {
  
let id = $(this).attr("data-id");

console.log(id);

  if (this.value !=='none') {
    console.log('true');
    $("#"+id).siblings().removeClass('show');
    
    
  }
   else if (this.value ==='none') {
    console.log('false');
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







		
		
	




  

