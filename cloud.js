var typed = new Typed('#element', {
    strings: ['<i>FrontEnd Developer</i>', ' <i>Application Developer</i>', ' <i>Competitive Programmer</i>'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

ddocument.addEventListener('DOMContentLoaded', () => {
    var typed = new Typed('#element', {
        strings: ['<i>FrontEnd Developer</i>', ' <i>Application Developer</i>', ' <i>Competitive Programmer</i>'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    let menuIcon = document.querySelector('#menu-icon');
    let sidePanel = document.querySelector('#navbar');
    let navLinks = document.querySelectorAll('.header1 nav a');
    let sections = document.querySelectorAll('section');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        sidePanel.classList.toggle('active');
    };

    window.onscroll = () => {
        let top = window.scrollY;
        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    let activeLink = document.querySelector('.header1 nav a[href*=' + id + ']');
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                });
            }
        });
    };
});
