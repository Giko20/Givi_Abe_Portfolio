let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let body = document.querySelector('body');
let header = document.querySelector('header');
let logo = document.querySelector('.logo');
let navbarItems = document.querySelectorAll('.navbar a');

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let light_dark = document.querySelector('#toggler');
let submit_button = document.querySelector('#submit-btn');

light_dark.addEventListener('click', function(){
    this.classList.toggle('bxs-sun');
    if (this.classList.toggle('bxs-moon')){
        body.classList.remove('dark-mode');
        header.style.background = 'var(--bg-color)';
        logo.style.color = 'var(--text-color)';
    }else{
        body.classList.add('dark-mode');
        header.style.background = 'var(--second-bg-color)';
        logo.style.color = 'var(--dark-text-color)';
    }
})


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // header.classList.toogle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// scroll Reveal

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-section, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-photo, .about-me, .projects-container, .contactMe form', { origin: 'bottom' });
ScrollReveal().reveal('.home-section h1, .my-image', { origin: 'left' });
ScrollReveal().reveal('.home-section p, .home-section .social-media, .contact-space', { origin: 'right' });



// typed js

const typed = new Typed('.multiple-text', {
    strings:['Data Engineer', 'Data Analyst', 'Full-Stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// form to email

function sendEmail(){
    Email.send({
        SecureToken : "a60637fa-691b-4cd5-9e07-b47d4f3133f8",
        To : 'abesadzegivi9@gmail.com',
        From : 'abesadzegivi9@gmail.com',
        Subject : "Portfolio Request",
        Body : "Full Name: " + document.querySelector('#full-name').value
            + "<br> Email: " + document.querySelector('#email').value
            + "<br> Phone Number: " + document.querySelector('#phone-number').value
            + "<br> What you want? : " + document.querySelector('#form-textarea').value
    }).then(
      message => alert(message)
    );
}


