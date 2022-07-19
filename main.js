function ornek(){
    
    var tasittutari;
    var fiyat = 1450;
    var taksitsayisi = 9; 

    tasittutari = fiyat/taksitsayisi;

    document.getElementById("taksit").innerHTML = tasittutari.toFixed(2) + " TL";
    document.getElementById("fiyat").innerHTML = fiyat + " TL";
  }
