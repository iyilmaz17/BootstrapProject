 $.ajax({
     dataType: "json",
     url: "http://localhost:3000/citys",
     data: "",
     success: function (cityData) {
       getCitys(cityData);
     }
   });


   function getCitys (cityData){
    function search(nameKey, cityArray){
          for (var i=0; i < cityArray.length; i++) {
              if (cityArray[i].id == nameKey) {
                  return cityArray[i];
              }
          }
      }
      $( document ).ready(function() {
        $.each(cityData, function( index, value ) {
          $('#cityId').append($('<option>', {
              value: value.id,
              text:  value.city
          }));
        });
        $("#cityId").change(function(){
          var valueSelected = this.value;
          if($('#cityId').val() > 0) {
            $('#districtId').html('');
            $('#districtId').append($('<option>', {
              value: 0,
              text:  'İlçe Seçiniz...'
            }));
            $('#districtId').prop("disabled", false);
            var resultObject = search($('#cityId').val(), cityData);
            $.each(resultObject.districts, function( index, value ) {
              $('#districtId').append($('<option>', {
                  value: value,
                  text:  value
              }));
            });
            return false;
          }
          $('#districtId').prop("disabled", true);
        });
      });
    }

    $("#userRegisterForm").submit(function(event){
      
      event.preventDefault();

      var $form = $( this ),
      valueName = $form.find( "input[name='userName']" ).val(),
      valueSurname = $form.find( "input[name='userSurname']" ).val(),
      url = $form.attr( "action" );
      $.post( url, { name: valueName, surname: valueSurname } );
    });
    