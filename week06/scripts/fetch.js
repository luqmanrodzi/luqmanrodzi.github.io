function GetBookings(){
    let url = 'https://api.sheety.co/fd818c0c3e27fb12c0cc5d26545b8da8/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
             console.log(json.bookings);
             let bookingList = document.getElementById("bookingList");
             bookingList.innerHTML = "";
             for(let i = 0; i < json.bookings.length;i++){
                 let gName = json.bookings[i].name;
                 let gEmail = json.bookings[i].email;
                 let gPax = json.bookings[i].pax;
                 let gId = json.bookings[i].id;

                bookingList.innerHTML += gId + "-" + gName + "," + gEmail 
                + ", pax:" + gPax + "<br>";
            
             }
        });
}

let getBookingBtn = document.getElementById("getbooking");
getBookingBtn.addEventListener("click", function () {
    GetBookings();
});