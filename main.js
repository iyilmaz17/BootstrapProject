// installmentTable Code

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
// Navbar Code
class MyHeader extends HTMLElement {
  connectedCallback() {
      this.innerHTML = '<nav class="navbar navbar-expand-lg bg-light p-4"><div class="container-fluid"><a class="navbar-brand" href="./index.html">My Sites</a><button class="navbar-toggler"type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Togglenavigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarScroll"><ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;"><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Ana Sayfa</a></li><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Cihazlar</a></li><li class="nav-item"><a class="nav-link active " aria-current="page" href="#"> Yeni Hizmetlerimiz</a></li><li class="nav-item dropdown"><a class="nav-link active dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown">İletişim</a><ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown"><li><a class="dropdown-item" href="#">Müşteri Hizmetleri</a></li><li><a class="dropdown-item" href="#">Teknik Servis</a></li></ul></li></ul><form class="d-flex" role="search"><input class="form-control me-2" type="search" placeholder="Ne aramıştınız..." aria-label="Search"><button class="btn btn-outline-success" type="submit">Arayın</button><div class="col-6 d-flex justify-content-end align-items-center"><div class="btn-group" role="group" aria-label="Basic example"><a class="btn btn-outline-success" href="./signIn.html">Giriş Yap</a><a class="btn btn-outline-success" href="./userRegister.html">Kayıt Ol</a></div></div></form></div></div></nav>'
  }
}
customElements.define("my-header",MyHeader)


