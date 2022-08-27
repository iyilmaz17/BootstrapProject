// Şehir alanı ve şehre göre ilçe alanını getiriyor.
// Sorun ilçe alanı her seferinde temizlenmesi gerekir.

$.ajax({
  dataType: "json",
  url: `${API_URL}city`,
  data: "",
  success: function (cityData) {
    getCitys(cityData);
  }
});
function getCitys(cityData) {
$(document).ready(function () {
    $.each(cityData, function (index, value) {
      $('#cityId').append($('<option>', {
        value: value.id,
        text: value.cityName
      }));
    });});};
    $("#cityId").change(function () {
      var cityId = $("#cityId").val();
      $.ajax({
        dataType: "json",
        //url: `${API_URL}District`,
        url:`http://localhost:5166/api/District/${cityId}`,
        data: "",
        success: function (districtData) {
          getdistrict(districtData);
        }
      })
      
    });
    function getdistrict(districtData){
      $(document).ready(function () {
    $.each(districtData, function (index, value) {
      $('#districtId').append($('<option>', {
        value: value.id,
        text: value.districtName
      }));
    });});}

// $("#userRegisterForm").submit(function (event) {

//   event.preventDefault();

//   var $form = $(this),
//     valueName = $form.find("input[name='userName']").val(),
//     valueSurname = $form.find("input[name='userSurname']").val(),
//     url = $form.attr("action");
//   $.post(url, { Name: valueName, Surname: valueSurname,Mail:"Test",Passworde:"11111" });
// });

// $( "#userRegisterForm" ).on( "submit", function( event ) {
//   event.preventDefault();
//   let data = $( this ).serialize();
//   //make our request here
//   $.post( "http://localhost:5166/api/User", function( data ) {
//       console.log(data);
//   });
// });

// Kullanıcı Kayıt
//Belirtilen alanlar için kayıt işlemi sorunsuz çalışıyor
$( "#register" ).on( "click", function( event ) {
$.ajax({
  method:"POST",
  contentType:"application/json",
  //url: `${API_URL}User`,
  url:"http://localhost:5166/api/User",
  data: JSON.stringify
  ({
  "name":         $.trim($("input[name='userName']").val()),
  "surname":      $.trim($("input[name='userSurname']").val()),
  "mail":         $.trim($("input[name='userMail']").val()),
  "password":     $.trim($("input[name='userPassword']").val()),
  "birthDate":    $.trim($("input[name='birthDate']").val()),
  "phone":        $.trim($("input[name='userPhone']").val()),
  "profileImage": $.trim($("input[name='userPhoto']").val())
  
  }),
  success: function () {
    // Yönlendirme yap
    "http://127.0.0.1:5501/index.html"
    //console.log($("#userName").val())
    //console.log($("#userMail").val())
    console.log()
    alert("Kayıt Başarılı");
  
  }
});
});

  