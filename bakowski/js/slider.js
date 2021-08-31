
var section = document.getElementsByTagName("section");
var slider = 0;
var x = document.getElementsByClassName("slider")[0].children;
var y = document.getElementsByClassName("nav")[0].children;
var wait = true;
let more = document.getElementById("more");
more.addEventListener("click", klik, true);
function klik() {
    clearer();
    wait = true;
    
section[1].classList.add("scrollbottom");
section[0].classList.add("awaytop");
x[1].classList.add("active2");
y[1].classList.add("active");

slider = 1;

delay();
}
function delay() {
    setTimeout(() => {
        wait = false;
    }, 1555);
}

delay();


function clearer() {
    document.getElementsByClassName("active2")[0].classList.remove("active2");
    document.getElementsByClassName("active")[0].classList.remove("active");
    if (document.getElementsByClassName("scrollbottom")[0] && document.getElementsByClassName("awaytop")[0]) {
        document.getElementsByClassName("scrollbottom")[0].classList.remove("scrollbottom");
        
        document.getElementsByClassName("awaytop")[0].classList.remove("awaytop");
       
    } else if (document.getElementsByClassName("scrolltop")[0] && document.getElementsByClassName("awaybottom")[0]) {
        document.getElementsByClassName("scrolltop")[0].classList.remove("scrolltop");
        
        document.getElementsByClassName("awaybottom")[0].classList.remove("awaybottom");
       
    }
    else if (document.getElementsByClassName("scrolltop")[0]) {
        document.getElementsByClassName("scrolltop")[0].classList.remove("scrolltop");
        
    }
}

var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
console.log(width);
if(width > 640) {
window.onwheel = (event) => {
    if (wait) {
        return;
    }

    let delta;
    let direction;
    wait = true;


    if (event.wheelDelta) {
        delta = event.wheelDelta;


    } else {
        delta = -1 * event.deltaY;

    }

    if (delta < 0) {
        console.log("DOWN");
        if (slider < 3) {
            slider++;

        } else {
            slider = 0;

        }
        direction = "down";
    } else if (delta > 0) {
        console.log("UP");
        if (slider > 0) {
            slider--;

        } else {
            slider = 3;

        }
        direction = "up";
    }
    console.log(slider);

    clearer();

    switch (slider) {
        case 0:
            if (direction === "down") {
                section[0].classList.add("scrollbottom");
                
                section[3].classList.add("awaytop");
                
            } else {
                section[0].classList.add("scrolltop");
                
                section[1].classList.add("awaybottom");
                
            }
            x[0].classList.add("active2");
            y[0].classList.add("active");
            break;
        case 1:
            if (direction === "down") {
                section[1].classList.add("scrollbottom");
              
                section[0].classList.add("awaytop");
               
            } else {
                section[1].classList.add("scrolltop");
               
                section[2].classList.add("awaybottom");
                
            }
            x[1].classList.add("active2");
            y[1].classList.add("active");
            break;
        case 2:
            if (direction === "down") {
                section[2].classList.add("scrollbottom");
               
                section[1].classList.add("awaytop");
              
            } else {
                section[2].classList.add("scrolltop");
               
                section[3].classList.add("awaybottom");
               
            }
            x[2].classList.add("active2");
            y[2].classList.add("active");
            break;
        case 3:
            if (direction === "down") {
                section[3].classList.add("scrollbottom");
                
                section[2].classList.add("awaytop");
                
            } else {
                section[3].classList.add("scrolltop");
               
                section[0].classList.add("awaybottom");
              
            }
            x[3].classList.add("active2");
            y[3].classList.add("active");
            break;

        default:
            break;
    }

    delay();
};
} else {
    for(let i = 0; i< y.length;i++) {
        y[i].addEventListener("click", gogogo, false);
    }
}
function gogogo() {
    for (i = 0; i < y.length; i++) {
        if (this === y[i]) {
            slider = i;
            break;
        }
    }
    section[slider].scrollIntoView();
}

for (i = 0; i < x.length; i++) {
    x[i].addEventListener("click", switcher, true);
}

//PRZYCISKI
function switcher() {
    if(this === document.getElementsByClassName("active2")[0]) {
        return;
    }
    for (i = 0; i < x.length; i++) {
        if (this === x[i]) {
            slider = i;
            break;
        }
    }
    
    clearer();
    switch (slider) {
        case 0:
            section[0].classList.add("scrolltop");
           
            break;
        case 1:
            section[1].classList.add("scrolltop");
           

            break;
        case 2:
            section[2].classList.add("scrolltop");
           

            break;
        case 3:
            section[3].classList.add("scrolltop");
            
 
            break;

        default:
            break;
    }
    this.classList.add("active2");
    y[slider].classList.add("active");
};

for (i = 0; i < y.length; i++) {
    y[i].addEventListener("click", switcher2, true);
}

function switcher2() {
    if(this === document.getElementsByClassName("active")[0]) {
        return;
    }
    for (i = 0; i < y.length; i++) {
        if (this === y[i]) {
            slider = i;
            break;
        }
    }
    
    clearer();
    switch (slider) {
        case 0:
            section[0].classList.add("scrolltop");
           
            break;
        case 1:
            section[1].classList.add("scrolltop");
           

            break;
        case 2:
            section[2].classList.add("scrolltop");
           

            break;
        case 3:
            section[3].classList.add("scrolltop");
            
 
            break;

        default:
            break;
    }
    this.classList.add("active");
    x[slider].classList.add("active2");
};