function GetBookings(){
    let url = 'https://api.sheety.co/fd818c0c3e27fb12c0cc5d26545b8da8/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
             console.log(json.bookings);
        });
}