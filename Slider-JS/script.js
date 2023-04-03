let images = [{
    url: "./images/image1.png",
    title: "Rostov-on-Don, Admiral",
    city: "Rostov-on-Don LCD admiral",
    area: "81 m2",
    time: "3.5 months"
},{
    url: "./images/image2.png",
    title: "Sochi Thieves",
    city: "Sochi Thieves",
    area: "105 m2",
    time: "4 months"
},{
    url: "./images/image3.png",
    title: "Rostov-on-Don Patriotic",
    city: "Rostov-on-Don Patriotic",
    area: "93 m2",
    time: "3 month"
}];

function initSlider() {
    if (!images || !images.length) return;

    let sliderImages = document.querySelector(".completed-slider");
    let sliderArrows = document.querySelectorAll(".arrows");
    let sliderDots = document.querySelector(".completed-nav");
    let sliderLinks = document.querySelector(".completed-links");
    let sliderEllipses = document.querySelectorAll(".ellipse-button");
    let sliderInfoCity = document.getElementById("city");
    let sliderInfoArea = document.getElementById("area");
    let sliderInfoTime = document.getElementById("time");

    sliderInfoCity.innerText = images[0].city;
    sliderInfoArea.innerText = images[0].area;
    sliderInfoTime.innerText = images[0].time;

    initImages();
    initArrows();
    initDots();
    initLinks();

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        })
    }

    function initArrows () {
        sliderArrows.forEach(arrow => {
            arrow.addEventListener("click", function() {
              let curNumber = +sliderImages.querySelector(".active").dataset.index;
              let nextNumber;
              if (arrow.classList.contains("arrow-left")) {
                nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
                }
              moveSlider(nextNumber);
            });
          });
    }

    function initDots() {
        images.forEach((image, index) => {
            let dot = `<li class="completed-nav-dot n${index} ${index === 0? "active" : ""}" data-index="${index}"></li>`;
            sliderDots.innerHTML += dot;
          });
          sliderDots.querySelectorAll(".completed-nav-dot").forEach(dot => {
            dot.addEventListener("click", function() {
                moveSlider(this.dataset.index);
            })
        })
    }

    function initLinks() {
        images.forEach((image, index) => {
            let link = `<li class="completed-link n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].title}</li>`;
            sliderLinks.innerHTML += link;
          });
          sliderLinks.querySelectorAll(".completed-link").forEach(link => {
            link.addEventListener("click", function() {
                moveSlider(this.dataset.index);
            })
        })
    }

    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");
        sliderLinks.querySelector(".active").classList.remove("active");
        sliderLinks.querySelector(".n" + num).classList.add("active");
        sliderInfoCity.innerText = images[num].city;
        sliderInfoArea.innerText = images[num].area;
        sliderInfoTime.innerText = images[num].time;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    initSlider();
  });
