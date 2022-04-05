let menuBar = function () {
    const x = document.getElementById("menuBar");
    const y = window.getComputedStyle(x,"::before");
    if (x.style.transform === "translateY(100%)"){
        x.style.transform = "translateY(-100%)";
    }else {
        x.style.transform = "translateY(100%)";
    }
    x.style.setProperty("--eight", "80%");
}

