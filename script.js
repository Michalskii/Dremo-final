$(document).ready(function() {
    // All your jQuery will go here!
});

$('#menu_checkbox').click(function(){
   $('#nav-ul').toggleClass('show');
 });

 let search = [];
         
     
let selectLocation = document.getElementById('location');
const selectType = document.getElementById('property-type');
const selectPrice = document.getElementById('max-price');

$('#location').change(function() {
  
  
  validate(this.value);
 
});
  
$('#property-type').change(function() {
  validate(this.value);
 
});

$('#max-price').change(function() {
  validate(this.value);
 
});


function validate(selected) {
  
  if (selected !=='none') {
    console.log('true');
    console.log(selected)
    
  }
   else if (selected ==='none') {
    console.log('false');
    console.log(selected)
  };
  
  
  

}




selectLocation.addEventListener('change', validate(selectLocation));
selectType.addEventListener('change', validate);
selectPrice.addEventListener('change', validate);

// function validate(check) {

//  if (check.value ==='none') {
//   $('.alert').addClass('show')
//   console.log('dupa')
// } else {
//   $('.alert').removeClass('show')
//   console.log('dupa2')
// }


// }

// $('#btn').click(validate(selectLocation));



//  $("#submit-mail").click(function(){
//         let  email = $("#email").val(); 
//         if (!email) {
//           $('#email').attr('placeholder', 'Please enter email');
//         }
//         else if(email.indexOf("@") < 0 || email.indexOf(".") < 0){
//           $('.emailMsg').toggleClass('show');
//           $('#email').val('');
         

// $('#email').attr('placeholder', '');
//           } else  {
//             console.log(email);
//             $('#email').val('Thank you!');
//             $('.emailMsg').toggleClass('show');
//           }
        
  
        
      
//     });

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







		
		
	




  

