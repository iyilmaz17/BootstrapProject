// Navbar Code
class MyHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = ' <nav class="navbar navbar-expand-lg bg-light p-4">\
        <div class="container-fluid"><a class="navbar-brand" href="./index.html"> My Sites</a><button class="navbar-toggler"\
                type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll"\
                aria-expanded="false" aria-label="Togglenavigation"><span class="navbar-toggler-icon"></span></button>\
            <div class="collapse navbar-collapse" id="navbarScroll">\
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">\
                    <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Ana Sayfa</a></li>\
                    <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Cihazlar</a></li>\
                    <li class="nav-item"><a class="nav-link active " aria-current="page" href="#">Yeni Hizmetlerimiz</a>\
                    </li>\
                    <li class="nav-item dropdown"><a class="nav-link active dropdown-toggle" href="#"\
                            id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown">İletişim</a>\
                        <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">\
                            <li><a class="dropdown-item" href="#">Müşteri Hizmetleri</a></li>\
                            <li><a class="dropdown-item" href="#">Teknik Servis</a></li>\
                        </ul>\
                    </li>\
                </ul>\
                <form class="d-flex" role="search"><input class="form-control me-2" type="search"\
                        placeholder="Ne aramıştınız..." aria-label="Search"><button class="btn btn-outline-success"\
                        type="submit">Arayın</button>\
                    <div class="col-6 d-flex justify-content-end align-items-center">\
                        <div class="btn-group" role="group" aria-label="Basic example"><button type="button"\
                                class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#signinModal">Giriş\
                                Yap</button><a class="btn btn-outline-success" href="./userRegister.html">Kayıt Ol</a></div>\
                    </div>\
                </form>\
            </div>\
        </div>\
    </nav>\
    <div class="modal fade" tabindex="-1" id="signinModal">\
        <div class="modal-dialog modal-dialog-centered" aria-hidden="true" data-bs-backdrop="static">\
            <div class="modal-content">\
                <div class="modal-header">\
                    <h2 class="fw-bold mb-0">Giriş Yap</h2><button type="button" class="btn-close" data-bs-dismiss="modal"\
                        aria-label="Kapat"></button>\
                </div>\
                <div class="modal-body">\
                    <form class="">\
                        <div class="form-floating mb-3"><input type="email" class="form-control rounded-3"\
                                id="userMail" placeholder="name@example.com"><label for="userMail">Mail\
                                Adresi</label></div>\
                        <div class="form-floating mb-3"><input type="password" class="form-control rounded-3"\
                                id="userPassword" placeholder="Password"><label for="userPassword">Şifre</label>\
                        </div><button id="login" class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Giriş</button><a\
                            href="#">Şifremi Unuttum</a>\
                    </form>\
                </div>\
                <div class="modal-footer"></div>\
            </div>\
        </div>\
    </div>'
    }
  }
  customElements.define("my-header", MyHeader)

  // Footer Code
  
  class MyFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = '<div class="container"><hr><footer class="py-5"><div class="row"><div class="col-6 col-md-2 mb-3"><h5>Sitemiz</h5><ul class="nav flex-column"><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Anasayfa</a></li><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Ürünlerimiz</a></li><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Hakkımızda</a></li><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">İletişim</a></li></ul></div><div class="col-6 col-md-2 mb-3"><h5>Sayfalar</h5><ul class="nav flex-column"><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Gizlilik sözleşmesi</a></li><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Satış sözleşmesi</a></li><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Sipariş iptal ve iade</a></li></ul></div><div class="col-6 col-md-2 mb-3"><h5>Markalar</h5><ul class="nav flex-column"><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Lenovo</a></li><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Monster</a></li><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Asus</a></li></ul></div><div class="d-flex col-md-5 offset-md-1 mb-3 justify-content-end"><form><h5>Mail bültenine abone olun...</h5><p>İndirmlerden ve yeniliklerden haberdar olmak için abone olun</p><div class="d-flex flex-column flex-sm-row w-100 gap-2"><label for="newsletter1" class="visually-hidden">Mail adresiniz</label><input id="newsletter1" type="text" class="form-control" placeholder="Mail adresiniz"><button class="btn btn-success " style="width: 120px;" type="button">Abone Ol</button></div></form></div></div><div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top"><p>&copy; Tüm hakları saklıdır</p></div></footer></div>'
    }
  }
  
  customElements.define("my-footer", MyFooter)