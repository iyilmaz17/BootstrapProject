// Attach a submit handler to the form
$( "#userRegisterForm" ).submit(function( event ) {
 
   
    event.preventDefault();
   
    
    var $form = $( this ),
      term = $form.find( "input[name='userName']" ).val(),
      url = $form.attr( "action" );
   
    // Send the data using post
    var posting = $.post( url, { userName: term } );
   ;
  });
// var obj =  {

//     "name": "Deneme",
//     "surname": "Test"
//   };

//  $.ajax({
//      dataType: "json",
//      url: "http://localhost:3000/installments",
//      data: obj,
//      success: function (data) {
//        console.log(data);
//        paymentTable(data);
//     }
//    });


