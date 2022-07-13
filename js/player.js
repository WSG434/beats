// YouTube iFrame API
// let player;
//       function onYouTubeIframeAPIReady() {
//         player = new YT.Player('yt-player', {
//           height: '405',
//           width: '660',
//           videoId: 'V2i1YkfrM54',
//           events: {
//             // 'onReady': onPlayerReady,
//             // 'onStateChange': onPlayerStateChange
//           },
//           playerVars:{
//             showinfo: 0,
//             rel: 0,
//             autoplay: 0
//           }
//         });
//       }


// LoftSchool (youtube iframe api)
let player;
const playerContainer = $('.player');

let eventsInit = () => {
  $(".player__start").click(e => {
    e.preventDefault();

    if (playerContainer.hasClass("paused")){
      player.pauseVideo();
    }else {
      player.playVideo();
    }
  });

  $(".player__playback").click(e => {
    const bar = $(e.currentTarget);
    const clickedPosition = e.originalEvent.layerX;
    const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
    const newPlaybackPositionSec = (player.getDuration() / 100) * newButtonPositionPercent;

    $(".player__playback-button").css({
      left: `${newButtonPositionPercent}%`
    });

    player.seekTo(newPlaybackPositionSec);
    
  });

  $(".player__splash").click(e => {
    player.playVideo();
  });
};

const formatTime = timeSec => {
  const roundTime = Math.round(timeSec);

  const minutes = addZero(Math.floor(roundTime/60));
  const seconds = addZero(roundTime - minutes*60);

  function addZero(num){
    return num < 10 ? `0${num}` : num;
  }
  
  return `${minutes}:${seconds}`;
}


const onPlayerReady = () => {
  let interval;
  const durationSec = player.getDuration();

  $(".player__duration-estimate").text(formatTime(durationSec));

  if (typeof intreval !== 'undefined') {
    clearInterval(interval);
  }

  intreval = setInterval(() => {
    const completedSec = player.getCurrentTime();
    const completedPercent = (completedSec/durationSec) * 100;

    $(".player__playback-button").css({
      left: `${completedPercent}%`
    })
    $(".player__duration-completed").text(formatTime(completedSec));
  }, 1000);
}

const onPlayerStateChange = event => {
  /*
  -1 (воспроизведение видео не начато)
  0 (воспроизведение видео завершено)
  1 (воспроизведение)
  2 (пауза)
  3 (буферизация)
  5 (видео подают реплики).
  */
  switch (event.data) {
    case 1:
      playerContainer.addClass("active");
      playerContainer.addClass("paused");
      break;
    
    case 2: 
      playerContainer.removeClass("active");
      playerContainer.removeClass("paused");
      break;
  }

}


      function onYouTubeIframeAPIReady() {
        player = new YT.Player('yt-player', {
          height: '405',
          width: '660',
          videoId: 'KZZB-QSsEFg',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          },
          playerVars:{
            controls: 0,
            disablekb: 0,
            showinfo: 0,
            rel: 0,
            autoplay: 0,
            modestbranding: 0
          }
        });
      }

eventsInit();






      


// HTML5 Video API

// const media = document.querySelector('video');
// const controls = document.querySelector('.controls');

// const play = document.querySelector('.play');
// const stop = document.querySelector('.stop');
// const rwd = document.querySelector('.rwd');
// const fwd = document.querySelector('.fwd');

// const timerWrapper = document.querySelector('.timer');
// const timer = document.querySelector('.timer span');
// const timerBar = document.querySelector('.timer div');

// media.removeAttribute('controls');
// controls.style.visibility = 'visible';

// play.addEventListener('click', playPauseMedia);


// function playPauseMedia() {
//   if(media.paused) {
//     play.setAttribute('data-icon','u');
//     media.play();
//   } else {
//     play.setAttribute('data-icon','P');
//     media.pause();
//   }
// }

// stop.addEventListener('click', stopMedia);
// media.addEventListener('ended', stopMedia);


// function stopMedia() {
//   media.pause();
//   media.currentTime = 0;
//   play.setAttribute('data-icon','P');
// }

// rwd.addEventListener('click', mediaBackward);
// fwd.addEventListener('click', mediaForward);


// let intervalFwd;
// let intervalRwd;

// function mediaBackward() {
//   clearInterval(intervalFwd);
//   fwd.classList.remove('active');

//   if(rwd.classList.contains('active')) {
//     rwd.classList.remove('active');
//     clearInterval(intervalRwd);
//     media.play();
//   } else {
//     rwd.classList.add('active');
//     media.pause();
//     intervalRwd = setInterval(windBackward, 200);
//   }
// }

// function mediaForward() {
//   clearInterval(intervalRwd);
//   rwd.classList.remove('active');

//   if(fwd.classList.contains('active')) {
//     fwd.classList.remove('active');
//     clearInterval(intervalFwd);
//     media.play();
//   } else {
//     fwd.classList.add('active');
//     media.pause();
//     intervalFwd = setInterval(windForward, 200);
//   }
// }

// function windBackward() {
//   if(media.currentTime <= 3) {
//     rwd.classList.remove('active');
//     clearInterval(intervalRwd);
//     stopMedia();
//   } else {
//     media.currentTime -= 3;
//   }
// }

// function windForward() {
//   if(media.currentTime >= media.duration - 3) {
//     fwd.classList.remove('active');
//     clearInterval(intervalFwd);
//     stopMedia();
//   } else {
//     media.currentTime += 3;
//   }
// }

// media.addEventListener('timeupdate', setTime);

// function setTime() {
//   const minutes = Math.floor(media.currentTime / 60);
//   const seconds = Math.floor(media.currentTime - minutes * 60);

//   const minuteValue = minutes.toString().padStart(2, '0');
//   const secondValue = seconds.toString().padStart(2, '0');

//   const mediaTime = `${minuteValue}:${secondValue}`;
//   timer.textContent = mediaTime;

//   const barLength = timerWrapper.clientWidth * (media.currentTime/media.duration);
//   timerBar.style.width = `${barLength}px`;
// }


// rwd.classList.remove('active');
// fwd.classList.remove('active');
// clearInterval(intervalRwd);
// clearInterval(intervalFwd);

// document.onclick = function(e) {
//   console.log(e.x) + ',' + console.log(e.y)
// }