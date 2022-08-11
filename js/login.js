// $(function () {
//     var API_URL = ""
//     var pass = "2785"
//     var mail = "eymen@kurt"

//     var url=`${API_URL}users?mail=${mail}&password=${pass}`
    
//     $('#login').click(function () {
        
//         $.ajax({
//             type: "GET",
//             url: url,
//             data: "",
//             success: function (data) {
//                 console.log(data);
//                 if(data.length>0){
//                     alert("merhaba ")
//                 }
//                 else{
//                     alert("hata")
//                     console.log(mail)
//                     console.log(url)
//                 }
                
//             }
//         });
//     });
// });