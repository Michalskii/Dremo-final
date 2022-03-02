$(document).ready(function() {
    // All your jQuery will go here!
});




$('#menu_checkbox').click(function(){
   $('#nav-ul').toggleClass('show');
 });

 let search = [];



 
if ($('#location').val() !== null ){
  console.log('dupa')
  $('#btn').removeAttr("disabled");
   }

 
 
 $('#btn').click(function() {
     


  if($('#location').val() == null 
  //|| $('#property-type').val() == null || $('#max-price').val() == null 
  ){
   
  $('.alert').toggleClass('show');
  $('#location').focus();
  
  }
  
  if ($('#property-type').val() == null) {
     
  $('.alert2').toggleClass('show');
  $('#location').focus();
    
  } 
   
  if ($('#max-price').val() == null) {
       
  $('.alert3').toggleClass('show');
  $('#location').focus();
  }


  let searched = {
         location: $('#location').val(),
         propertyType: $('#property-type').val(),
         maxPrice : $('#max-price').val()
        }
    console.log(searched)
    search.push(searched)
    console.log(search)

    })
         
     
 
 

 
      $("#submit-mail").click(function(){
        let  email = $("#email").val(); 
        if (!email) {
          alert("");
        }
        else if(email.indexOf("@") < 0 || email.indexOf(".") < 0){
          alert("Invalid email"); 

          } else  {
            console.log(email);
          }
        
  
        
      
    });






