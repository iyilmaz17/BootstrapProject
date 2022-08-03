

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