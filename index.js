const boxes = document.querySelectorAll('.now');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });

}, {
    threshold: 0.2
});

boxes.forEach(box => {
    observer.observe(box);
});

const foots = document.querySelectorAll('.foot');

const web = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });

}, {
    threshold: 0.2
});

foots.forEach(foot => {
    web.observe(foot);
});