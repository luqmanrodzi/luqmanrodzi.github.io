letelLocate = document.getElementById("locate")
elLocate.addEventListener ("click",function(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(){
            let elLat = document.getElementById("lat")
            let elLong = document.getElementById("long");

            elLat.innerHTML = "latitude : " + Position.coords.latitude;
            elLat.innerHTML = "longitude : " + Position.coords.longitude;
        });

    }else {
        alert("geolocation is not suppoerted by this browser")
    }
});