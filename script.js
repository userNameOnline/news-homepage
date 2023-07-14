

function changeSectionCont() {
    if(window.innerWidth < 1200) {
        document.getElementById('section-cont').style.display = 'block';
    } else {
        document.getElementById('section-cont').style.display = 'flex';
    }
}

function changeNav() {
    if(window.innerWidth < 1200) {
        document.getElementById('links').style.display = 'none';
        document.getElementById('hamburger').style.display = 'block';
    } else {
        document.getElementById('links').style.display = 'block';
        document.getElementById('hamburger').style.display = 'none';
    }
}

function changeMain() {
    if(window.innerWidth < 1200) {
        document.getElementsByTagName('main')[0].style.display = 'block';
        document.getElementById('sub-main').style.display = 'block';
    } else {
        document.getElementsByTagName('main')[0].style.display = 'flex';
        document.getElementById('sub-main').style.display = 'flex';
    }
}

function changeView() {
    changeSectionCont();
    changeNav();
    changeMain();
}

window.onload = function() {
    changeView();
}

window.onresize = function() {
    changeView();
}

function showMobileMenu() {
    document.getElementById('mobile-menu').style.right = '0';
    document.getElementById('overlay').style.display = 'block';
}

function closeMobileMenu() {
    document.getElementById('mobile-menu').style.right = '-300px';
    document.getElementById('overlay').style.display = 'none';
}

document.getElementById('hamburger').onclick = showMobileMenu;