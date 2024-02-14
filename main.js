function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("overlay").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}

var openBtn = document.getElementById("openBtn");
openBtn.onclick = function () {
    openNav();
};

var overlay = document.getElementById("overlay");
overlay.onclick = function () {
    closeNav();
};