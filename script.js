const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let counter = 1;

next.addEventListener('click', () => {
    counter++;
    if (counter > circles.length) {
        counter = circles.length;
    }
    update();
});
prev.addEventListener('click', () => {
    counter--;
    if (counter < 1) {
        counter = 1;
    }
    update();
});

const update = () => {
    circles.forEach((circle, i) => {
        if (i < counter) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if (counter === 1) {
        prev.disabled = true;
    } else if (counter === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
};