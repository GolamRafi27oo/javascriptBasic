var black = document.getElementById("Black");
var blue = document.getElementById("Blue");
var pink = document.getElementById("Pink");
var purple = document.getElementById("Purple");
var red = document.getElementById("Red");
var heartrate = document.getElementById("heartrate");
var image = document.getElementById("image");
var imageheart = document.getElementById("imageheart");
var watch = document.getElementById("watch");
var time = document.getElementById("time");


function blackbtn(){
    image.src = "img/black.png";
}

black.onclick = blackbtn;

function bluebtn(){
    image.src = "img/blue.png"
}

blue.onclick = bluebtn;

function pinkbtn(){
    image.src = "img/pink.png"
}
pink.onclick = pinkbtn;

function purplebtn(){
    image.src = "img/purple.png"
}
purple.onclick = purplebtn;

function redbtn(){
    image.src = "img/red.png"
}
red.onclick = redbtn;

function heartratebtn(){
    imageheart.src = "img/heart.png"
    watch.id = "watch2";
}
heartrate.onclick = heartratebtn;

function timeShow(){
    watch.id = "watch";
    imageheart.src = "";
}
time.onclick = timeShow;
