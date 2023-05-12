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

/* clicking on anywhere expect the navbar will close it */

document.addEventListener('click', function(event) {

    // check if the target of the click event is not the navigation bar or its child elements
    if ((event.target !== menuBar && !menuBar.contains(event.target)) && 
    (event.target !== navColumn && !navColumn.contains(event.target))) {
        navColumn.style.left = '100%';
    }
});


/* Switch to dark mode */

const sun = document.querySelector('.fa-sun');
const moon = document.querySelector('.fa-moon');

sun.addEventListener('click', function() {
    sun.style.display = 'none';
    moon.style.display = 'block';
    document.body.classList.toggle('dark-mode');
})

moon.addEventListener('click', function() {
    moon.style.display = 'none';
    sun.style.display = 'block';
    document.body.classList.toggle('dark-mode');
})

