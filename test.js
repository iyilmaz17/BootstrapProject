// var fakeJson={
//  name:"cihan",
//  surname:"şahin",
//  age:29,

// }//object //JsonObject // c# class gibi

// var fakeArray = [
//   {taksitSayisi:"cihan",price:150},
//   {taksitSayisi:"cihan",price:1490},
//   {taksitSayisi:"cihan",price:55},
 
// ];



function ornek(){
  var fakeArray = [
    {taksitSayisi:"cihan",price:150},
    {taksitSayisi:"asd",price:1490},
    {taksitSayisi:"ismail",price:55},
   
  ];
  for(var i =0 ; i<fakeArray.length;i++){
    var textAge = document.createTextNode(fakeArray[i].taksitSayisi);
    var textName = document.createTextNode(fakeArray[i].price);
    var newRow   = tableRef.insertRow();
    newRow.insertCell().appendChild(textAge);
    newRow.insertCell().appendChild(textName);

    var tasittutari;
    var fiyat;
    var taksitsayisi1; 

    taksitsayisi1=document.getElementById("taksitsayisi").innerHTML;
    fiyat = document.getElementById("price").innerHTML;

    tasittutari = fiyat/taksitsayisi1;
    

    document.getElementById("taksit").innerHTML = tasittutari.toFixed(2) + " TL";
    document.getElementById("fiyat").innerHTML = fiyat + " TL";

    var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

   }
}

  

// function ornek(){
    
//     var tasittutari;
//     var fiyat;
//     var taksitsayisi1; 

//     taksitsayisi1=document.getElementById("taksitsayisi").innerHTML;
//     fiyat = document.getElementById("price").innerHTML;

//     tasittutari = fiyat/taksitsayisi1;
    

//     document.getElementById("taksit").innerHTML = tasittutari.toFixed(2) + " TL";
//     document.getElementById("fiyat").innerHTML = fiyat + " TL";

//     var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

//   }
  