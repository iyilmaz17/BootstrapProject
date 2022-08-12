// Product detail (Ürün detay sayfasını her ürüne özel olarak getiriyor.)
// url link sorgusunu main.js de bulunan product add alanından alıyor
$(function() {
  var id = window.location.search;
$.ajax({
  
  dataType: "json",
  url: `${API_URL}products${id}`,
  data: "",
  success: function (data) {
    $("#title" ).html(data[0].productName);
    $("#brand").html(data[0].brand);
    $("#unitPrice").html(data[0].unitPrice);
    
    for (var i =0; i < data[0].images.length; i++){
    $("#image").attr("src",data[i].images[i]);
    }
  }
});
});
// Payment Table Add

$.ajax({
  dataType: "json",
  url: `${API_URL}installments`,
  data: "",
  success: function (data) {
    paymentTable(data);
  }
});

// installmentTable Code

function paymentTable(installments) {

  for (var i = 0; i < installments.length; i++) {
    var tableRef = document
      .getElementById("installmentTable")
      .getElementsByTagName("tbody")[0];

    var installmentCount = document.createTextNode(
      installments[i].installmentCount
    );
    var installmentAmount = document.createTextNode(
      (installments[i].price / installments[i].installmentCount).toFixed(2)
    );
    var productPrice = document.createTextNode(installments[i].price);

    var newRow = tableRef.insertRow();
    newRow.insertCell().appendChild(installmentCount);
    newRow.insertCell().appendChild(installmentAmount);
    newRow.insertCell().appendChild(productPrice);
  }
}
