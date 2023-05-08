/* navbar display for mobile devices*/

const navColumn = document.getElementById('nav-column-id');
const menuBar = document.getElementById('menu-bar-id');
const crossBar = document.getElementById('cross-bar-id')

/* 'display:block' on clicking menubar */

menuBar.addEventListener('click', function() {

    navColumn.style.left = '50%';
});

crossBar.addEventListener('click', function() {
    
    navColumn.style.left = '100%';
});

/*  */

document.addEventListener('click', function(event) {

    // check if the target of the click event is not the navigation bar or its child elements
    if ((event.target !== menuBar && !menuBar.contains(event.target)) && 
    (event.target !== navColumn && !navColumn.contains(event.target))) {
        navColumn.style.left = '100%';
    }
});