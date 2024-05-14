function clearScreen() {
    document.getElementById("result").value = "";
}

function liveScreen(value) {
    document.getElementById("result").value += value; 
}

function switchTheme() {
    let darkmode = document.getElementById("dark-mode");
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "light.css") {
        theme.href = "dark.css";
        darkmode.innerHTML = "Light Mode"
    } else {
        theme.href = "light.css";
        darkmode.innerHTML = "Dark Mode"
    }
}