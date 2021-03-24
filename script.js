function saveBg() {
    bg = document.getElementById("bg").value;
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
color = localStorage.getItem("color");
bg = localStorage.getItem("bg");
engine = localStorage.getItem("engine");
document.getElementById("body").style.color = color;
document.getElementById("body").style.background = bg;
