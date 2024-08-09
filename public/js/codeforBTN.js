export function playbtn() {
  const video = document.querySelectorAll(".video-container");
  const playBtn = document.querySelectorAll(".playBtn");
  const display = document.querySelectorAll(".display");

  playBtn.forEach((play, playId) => { 
    play.addEventListener("click", () => {

      play.classList.contains('fa-circle-play')
        ? (play.classList.remove('fa-circle-play'), play.classList.add('fa-circle-pause'))
        : (play.classList.remove('fa-circle-pause'),
          play.classList.add('fa-circle-play'))


      display.forEach((dis, disId) => {
       
        dis.addEventListener('mouseover', () => {
          play.style.opacity =100;
        });

        dis.addEventListener('mouseout', () => {
          const shouldFadeOut = (playId === disId && play.classList.contains('fa-circle-pause'));
          play.style.opacity = shouldFadeOut ? 0 : 100;
          play.style.transition = 'opacity .2s linear'
        });


      });

      video.forEach((vid, vidId) => {
        (playId === vidId && play.classList.contains('fa-circle-pause'))
          ? (vid.play())
          : (vid.pause())
      });
    });
  });



}