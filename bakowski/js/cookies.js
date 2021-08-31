let Cookies = {};

Cookies.initialize = () => {
    let container = document.getElementById('cookies');
        container.style.display = "block";
};

Cookies.accepted = () => {
    let container = document.getElementById('cookies');
        container.style.display = "none";
    localStorage.cookieAccepted = true;
};

Cookies.check = () => {
    if (!localStorage.cookieAccepted) {
        Cookies.initialize();
    }
};

Cookies.check();