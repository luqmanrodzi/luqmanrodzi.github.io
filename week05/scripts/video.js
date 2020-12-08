window.onload = function(){
    let video = document.getElementById("myVideo");

    let playBtn = document.getElementById("playBtn");
    playBtn.addEventListener("click", function(){
        video.play();
    });

 let pauseBtn = document.getElementById("pauseBtn");
    playBtn.addEventListener("click", function(){
        video.pause();
    });
    
 let freezeBtn = document.getElementById("freezeBtn");
 playBtn.addEventListener("mousedown", function(){
     video.pause();
 });
 playBtn.addEventListener("mouseup", function(){
    video.play();
 });
}