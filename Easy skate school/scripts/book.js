function BookNow(guestName, guestPhone, guestEmail, guestPackage, guestRemarks){
    let url = 'https://api.sheety.co/fd818c0c3e27fb12c0cc5d26545b8da8/bookingApp/bookings';
    let body = {
        booking: {
            name:guestName,
            phone: guestPhone,
            email:guestEmail,
            package: guestPackage,
            remarks: guestRemarks,
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers:{
            "Content-Type":"application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
        bookMsg.innerHTML = json.booking.name + " added!"
        
    });
  }
  window.addEventListener("click", function(){
document.getElementById("bookNow").addEventListener("click", function(){
    let userName = document.getElementById("userName").value;
    let userPhone = document.getElementById("userPhone").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPackage = document.getElementById("userPackage").value;
    let userRemarks = document.getElementById("userRemarks").value;
});
  })