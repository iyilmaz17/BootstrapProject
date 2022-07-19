function ornek(){
    
    var tasittutari;
    var fiyat;
    var taksitsayisi1; 

    taksitsayisi1=document.getElementById("taksitsayisi").innerHTML;
    fiyat = document.getElementById("price").innerHTML;

    tasittutari = fiyat/taksitsayisi1;
    

    document.getElementById("taksit").innerHTML = tasittutari.toFixed(2) + " TL";
    document.getElementById("fiyat").innerHTML = fiyat + " TL";
  }
