const vidWrapper = document.querySelector("div.player");
const myVid = vidWrapper.querySelector("video");
const controlPlay = vidWrapper.querySelector(".player__start");
const playerContainer = $(".player");

let eventsInit = () => {
  $(".player__start").click((e) => {
    e.preventDefault();

    if (playerContainer.hasClass("paused")) {
      myVid.pause();
      playerContainer.removeClass("active");
      playerContainer.removeClass("paused");
      controlPlay.innerHTML = "❚❚";
    } else {
      myVid.play();
      playerContainer.addClass("active");
      playerContainer.addClass("paused");
      controlPlay.innerHTML = "►";
    }
  });

  $(".player__splash").click((e) => {
    if (!playerContainer.hasClass("paused")) {
      myVid.play();
      playerContainer.addClass("active");
      playerContainer.addClass("paused");
      controlPlay.innerHTML = "►";
    }
  });

  $(".player__elem").click((e) => {
    if (playerContainer.hasClass("paused")) {
      myVid.pause();
      playerContainer.removeClass("active");
      playerContainer.removeClass("paused");
      controlPlay.innerHTML = "❚❚";
    }
  });
};

$(".player__playback").click((e) => {
  const bar = $(e.currentTarget);
  const clickedPosition = e.originalEvent.layerX;
  const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
  const newPlaybackPositionSec =
    (myVid.duration / 100) * newButtonPositionPercent;

  $(".player__playback-button").css({
    left: `${newButtonPositionPercent}%`,
  });

  myVid.currentTime = newPlaybackPositionSec;
});

$(".player__volume").click((e) => {
  const bar = $(e.currentTarget);
  const clickedPosition = e.originalEvent.layerX;
  let newButtonPositionPercent = clickedPosition / bar.width();
  if (newButtonPositionPercent < 0) {
    newButtonPositionPercent = 0;
  }

  $(".player__volume-button").css({
    left: `${newButtonPositionPercent * 100}%`,
  });
  $(".player__volume--filled").css({
    width: `${newButtonPositionPercent * 100}%`,
  });

  myVid.volume = newButtonPositionPercent;
});

const progressBar = () => {
  let interval;
  const durationSec = myVid.duration;

  if (typeof interval !== "undefined") {
    clearInterval(interval);
  }

  interval = setInterval(() => {
    const completedSec = myVid.currentTime;
    const completedPercent = (completedSec / durationSec) * 100;

    $(".player__playback-button").css({
      left: `${completedPercent}%`,
    });
    $(".player__playback--filled").css({
      width: `${completedPercent}%`,
    });
  }, 100);
};

eventsInit();
progressBar();
