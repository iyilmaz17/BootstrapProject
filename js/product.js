// Product detail 

$.ajax({
  dataType: "json",
  url: `${API_URL}products`,
  data: "",
  success: function (data) {
    $("#title" ).html(data[2].productName);
    $("#brand").html(data[2].brand);
    $("#unitPrice").html(data[2].unitPrice);
    
    for (var i =0; i < data[i].images.length; i++){
     var a = $("#image").attr("src",data[i].images[i]);
      console.log(data[i].images[i])
    }
   //console.log(data[4].images[0])
    //$("#image").attr("src","./image/excalibur.jpg");
    //./image/asus.jpeg
  }
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
