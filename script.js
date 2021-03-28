var color, bg, engine, doc, body;
doc = document;
body = doc.getElementById("body");

color = localStorage.getItem("color");
bg = localStorage.getItem("bg");
engine = localStorage.getItem("engine");

function saveBg() {
    bg = document.getElementById("bg").value;
    localStorage.setItem("bg", bg);
    document.getElementById("body").style.background = bg;
}
function saveBg1() {
    bg = "url(bg1.webp";
    localStorage.setItem("bg", bg);
    document.getElementById("body").style.background = bg;
}
function saveBg2() {
    bg = "url(bg2.jpg";
    localStorage.setItem("bg", bg);
    document.getElementById("body").style.background = bg;
}
function saveBg3() {
    bg = "url(bg3.jpg";
    localStorage.setItem("bg", bg);
    document.getElementById("body").style.background = bg;
}
function saveBg4() {
    bg = "url(bg4.jpg";
    localStorage.setItem("bg", bg);
    document.getElementById("body").style.background = bg;
}
function saveColor() {
    color = document.getElementById("color").value;
    localStorage.setItem("color", color);
    document.getElementById("body").style.color = color;
}
function saveEngine() {
    engine = document.getElementById("engine").value;
    localStorage.setItem("engine", engine);
}
function search() {
    searchTerm = document.getElementById("search").value;
    link = "https://google.com/search?q=" + searchTerm;
    window.open(link);
}
function searchPages() {
    searchPage = document.getElementById("search").value;
    location.replace("results.html")
}

body.style.color = color;
body.style.background = bg;
