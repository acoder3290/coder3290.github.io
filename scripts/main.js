var myImg = document.querySelector('img');

myImg.onclick = function () {
    var mySrc = myImg.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImg.setAttribute('src', 'images/website-drawing-scan.png');
    } else {
        myImg.setAttribute('src', 'images/firefox-icon.png');
    }
};

var myBut = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var name = prompt('what is your name');
    localStorage.setItem('name', name);
    myHeading.textContent = 'Mozilla is cool, ' + name;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    myHeading.textContent = 'Mozilla is cool, ' + localStorage.getItem('name');
}

myBut.onclick = function () {
    setUserName();
};