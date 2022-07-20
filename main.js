function ornek() {
  var installments = [
    { installmentCount: "2", price: 1500 },
    { installmentCount: "3", price: 1500 },
    { installmentCount: "4", price: 1508 },
    { installmentCount: "5", price: 1510 },
    { installmentCount: "6", price: 1528 },
    { installmentCount: "7", price: 1586 },
    { installmentCount: "8", price: 1599 },
    { installmentCount: "9", price: 1610 },
  ];

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