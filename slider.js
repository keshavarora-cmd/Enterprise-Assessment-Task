

const slider = document.querySelectorAll(".slider");
const dots = document.querySelectorAll(".dot");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let current = 0;


if (slider.length > 0) {

    function showSlide(index) {

        slider.forEach((slide) => {
            slide.classList.remove("active");
        });

        dots.forEach((dot) => {
            dot.classList.remove("active");
        });

        slider[index].classList.add("active");
        dots[index].classList.add("active");

    }

    next.addEventListener("click", function () {

        current++;

        if (current >= slider.length) {
            current = 0;
        }

        showSlide(current);

    });

    prev.addEventListener("click", function () {

        current--;

        if (current < 0) {
            current = slider.length - 1;
        }

        showSlide(current);

    });

    dots.forEach((dot, index) => {

        dot.addEventListener("click", function () {

            current = index;
            showSlide(current);

        });

    });

    setInterval(function () {

        current++;

        if (current >= slider.length) {
            current = 0;
        }

        showSlide(current);

    }, 6000);

}