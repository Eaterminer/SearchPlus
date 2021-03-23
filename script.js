function saveBg() {
    bg = document.getElementById("bg").value;
    localStorage.setItem("bg", bg);
}
function saveColor() {
    bg = document.getElementById("color").value;
    localStorage.setItem("color", color);
}
function saveEngine() {
    engine = document.getElementById("engine").value;
    localStorage.setItem("engine", engine);
}