function toggleDarkMode() {
    var style = document.getElementById('darkmode-style');
    style.disabled = !style.disabled;
    if (!style.disabled) {
        localStorage.setItem("darkmode", "enabled");
    } else {
        localStorage.setItem("darkmode", "disabled");
    }
}

/* Apply saved dark mode when page loads */
document.addEventListener("DOMContentLoaded", function(){
    var style = document.getElementById('darkmode-style');
    if(localStorage.getItem("darkmode") === "enabled"){
        style.disabled = false;
    } else {
        style.disabled = true;
    }
});