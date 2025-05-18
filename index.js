const left_btn = document.querySelector('.nav-left-btn');
const right_btn = document.querySelector('.nav-right-btn');
const imgslider = document.querySelector('.img-slider');
const imgslider_images = document.querySelectorAll('.img-slider img');
const indicator = document.querySelectorAll('.indicator');
let intervalID;
const down_arrow = document.querySelector('.fa-angle-down');
const page4container = document.querySelector('.page-4-container')
const experiencecount = document.querySelectorAll('.Experiences-container span')
const container = document.querySelector('.Experiences-container')
const mode = document.querySelector('.mode')
const darkmode = document.querySelector('.fa-moon')
const lightmode = document.querySelector('.fa-sun')
const body = document.querySelector('body')
//function
function nextBtnClick() {
  slider_length = imgslider.clientWidth;
  imgslider.style.transform = `translateX(-${slider_length}px)`;
  imgslider.style.transition = "all 0.5s ease-in-out";
  setTimeout(() => {
    imgslider.appendChild(imgslider.firstElementChild);
    imgslider.style.transition = "none";
    imgslider.style.transform = `translateX(${0}px)`;
  }, 500)
  currentIndex = (currentIndex + 1) % imgslider_images.length;
  updateIndicator()
};
function prevBtnclick() {
  slider_length = imgslider.clientWidth;
  imgslider.style.transition = "none";
  imgslider.prepend(imgslider.lastElementChild);
  imgslider.style.transform = `translateX(-${slider_length}px)`;
  setTimeout(() => {
    imgslider.style.transition = "all 0.5s ease-in-out";
    imgslider.style.transform = `translateX(${0}px)`;
  }, 10)
  currentIndex = (currentIndex - 1 + imgslider_images.length) % imgslider_images.length;
  updateIndicator()
};
function startAutoSliding() {
  intervalID = setInterval(nextBtnClick, 2000);
} function stopAutoSliding() { clearInterval(intervalID) }
right_btn.addEventListener('click', () => {
  stopAutoSliding();
  prevBtnclick()
});
left_btn.addEventListener('click', () => {
  stopAutoSliding();
  nextBtnClick();
});

right_btn.addEventListener('mouseover', () => {
  stopAutoSliding();
});
left_btn.addEventListener('mouseover', () => {
  stopAutoSliding();
});
right_btn.addEventListener('mouseleave', () => {
  startAutoSliding();
});
left_btn.addEventListener('mouseleave', () => {
  startAutoSliding();
});

startAutoSliding();

down_arrow.addEventListener('click', () => {

  if (page4container.style.height === '400px') { page4container.style.height = '0px' }
  else { page4container.style.height = '400px' }
})



const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { startCounter() }
    else {
      experiencecount.forEach(element => {
        element.innerHTML = '0+'
      });
    }
  })
}, { threshold: .5 });
observer.observe(experiencecount[2])

function startCounter() {
  experiencecount.forEach(e => {
    let counter = 0;
    let target = Number(e.getAttribute("data-count"));
    let interval = setInterval(() => {
      if (counter < target) {
        counter++;
        e.innerHTML = counter + '+';
      }
      else { clearInterval(interval) }
    }, 50);
  });
};


let currentIndex = 0;

function updateIndicator() {
  currentIndex = currentIndex++;
  indicator.forEach((ind) => {
    ind.classList.remove('active');
    indicator[currentIndex].classList.add('active');
  });
};

const savedTheme = localStorage.getItem('theme');
if (savedTheme === "dark") {
  body.classList.add('dark-mode');
  darkmode.style.display = 'none'
  lightmode.style.display = 'flex'
}
else {
  body.classList.remove('dark-mode');
  darkmode.style.display = 'flex'
  lightmode.style.display = 'none'
}
mode.addEventListener('click', () => {
  body.classList.toggle('dark-mode')
  if (body.classList.contains('dark-mode')) {
    darkmode.style.display = 'none'
    lightmode.style.display = 'flex'
    localStorage.setItem('theme', 'dark')
  } else {
    darkmode.style.display = 'flex'
    lightmode.style.display = 'none'
    localStorage.setItem('theme', 'light')
  }
})

document.querySelector('.hero_video').removeAttribute('controls');