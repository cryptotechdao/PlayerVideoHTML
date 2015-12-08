function PlayVideo() {
  var v = document.getElementsByTagName("video")[0];
  v.play();
  v.volume = 0.5;
}

function PauseVideo() {
  var v = document.getElementsByTagName("video")[0];
  v.pause();
}

function RewindVideo() {
  var v = document.getElementsByTagName("video")[0];
  currentTime = 0;
  v.currentTime--;
}

function EndVideo() {
  var v = document.getElementsByTagName("video")[0];
  var currentVideo = 0;
  v.currentTime++;
}

function InVolume() {
  var v = document.getElementsByTagName("video")[0];
  v.volume += 0.1;
}

function DeVolume() {
  var v = document.getElementsByTagName("video")[0];
  v.volume -= 0.1;
}
