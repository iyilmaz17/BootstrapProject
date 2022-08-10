// Ürün ekleme

$.ajax({
  dataType: "json",
  url: `${API_URL}products`,
  data: "",
  success: function (data) {
    console.log(data.length);
    for (var i = 0; i < data.length; i++)
    {
  var $div = $( "<div class='col'><div class='card shadow-sm'><img id='image' src='"+data[i].images+"' style='width: auto; height: auto' alt='asus' /><div class='card-body'><p class='card-text' id='cardtitle'>"+data[i].productName +"</p><div class='d-flex justify-content-between align-items-center'><a href='./product.html' style='height: 50px; width: 100%'><button type='button'class='btn btn-sm btn-outline-primary justify-content-end'style='height: 50px; width: 100%'>Sepete Ekle</button></a></div></div></div></div>");
  $("#addProduct").append($div);
  
}
 }
});

// Password Show   // Tek şifre alanı için çalışıyor iki alan olarak düzeltilmeli

function passwordShow() {
  var x = document.getElementById("userPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

$(function () {
  // Page Top Button

  $("#pageTop").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $("#pageTop").fadeIn();
    } else {
      $("#pageTop").fadeOut();
    }
  });
  $("#pageTop").click(function () {
    $("body,html").animate({ screenTop: 0 }, 1500);
  });

  // Register Form Button Disabled

  $(".filed input").on("keyup", function () {
    let empty = false;
    $(".filed input").each(function () {
      empty = $(this).val().length == 0;
    });

    if (empty) {
      $(".actions input").attr("disabled", "disabled");
    } else {
      $(".actions input").attr("disabled", false);
    }

    $("#userPasswordAgain").on('keyup', function(){
      var userPassword = $("#userPassword").val();
      var userPasswordAgain = $("#userPasswordAgain").val();
 
 
      if (userPassword != userPasswordAgain)
         {
           $(".actions input").attr("disabled", "disabled");
          $("#validationPasswordAgain").html("Şifreler Eşleşmiyor").css("color","red");
         }
      else
          {
           $("#validationPasswordAgain").html("");
          $(".actions input").attr("disabled", false);
          }
     });
  });
});

$(function () {
  var API_URL = "http://localhost:3000/"
  var pass = "2785"
  var mail = "eymen@kurt"

  var url=`${API_URL}users?mail=${mail}&password=${pass}`
  
  $('#login').click(function () {
      
      $.ajax({
          type: "GET",
          url: url,
          data: "",
          success: function (data) {
              console.log(data);
              if(data.length>0){
                  alert("merhaba ")
              }
              else{
                  alert("hata")
                  console.log(mail)
                  console.log(url)
              }
              
          }
      });
  });
});