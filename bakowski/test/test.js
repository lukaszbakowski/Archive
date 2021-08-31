let tooltips = document.querySelector(".spantip");

window.onload = () => {
    window.addEventListener("mousemove", e => {
        var x = e.clientX + "px",
            y = e.clientY + "px";

        tooltips.style.top = y;
        tooltips.style.left = x;
    });
};
