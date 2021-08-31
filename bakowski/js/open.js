let clicker = document.getElementsByClassName("open");
let open = document.getElementsByClassName("output");

clicker[0].addEventListener("click", wind, false);
clicker[1].addEventListener("click", ciastko, false);

function wind() {
    if(wait) {
        return;
    }
    wait = true;
    open[0].style.display="block";
}
function ciastko() {
    if(wait) {
        return;
    }
    wait = true;
    open[1].style.display="block"; 
}


for(let i = 0; i<open.length;i++) {
    open[i].addEventListener("click", close, false);
}

function close() {
    this.style.display="none";
    wait = false;
}

