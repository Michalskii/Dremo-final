$(document).ready(function() {
    // All your jQuery will go here!
});

$('#menu_checkbox').click(function(){
   $('#nav-ul').toggleClass('show');
 });

 let search = [];





// $('#btn').mouseover(function()
// {$('#btn').removeAttr("disabled");
//   console.log('fsd');
//   alert('fds');
// // if ($('#location').val() !== null ){
// //   console.log('dupa')
// //   $('#btn').removeAttr("disabled");
// });

  

// $(document).ready(function() {
	
//    $("#location").change(function()) {
//   let loc = 2;
//   console.log(loc) 
//    }
  
  // $("#property-type").change(function() {
  // let type = true;
  // console.log(type)

  // $("#max-price").change(function() {
  // let price = 5;
  // console.log(price);

// if((loc === 2) && (type === 4) && (price === true)) {
//     console.log('jajko')

//   };
  
  
   
  


 



//   });


// });
  


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




// $(document).ready(function() {
// 	$("#max-price").change(function fsdf() {
//     var selectedVal = $("#max-price option:selected").val();
//     console.log(selectedVal)
 
   
//    });
    
//    $("#property-type").change(function() {
//       var selectedVal2 = $("#property-type option:selected").val();
//       console.log(selectedVal2);
    
// });
    

// $("#location").change(function() {
//       var selectedVal3 = $("#location option:selected").val();

//       console.log(selectedVal3)

		
		
	




  
//   });_
 
  
// });



$(document).ready(function() {
    $('#btn').prop('disabled', true);
    $('#dupa').change( function() {
        if ($(this).val() !== '') {
            $('#btn').prop('disabled', false);
        }
        else {
            $('#btn').prop('disabled', true);
        }
    });
});
