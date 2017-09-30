function setOffline()
{
  $('#streamStateLabel > span').text("OFFLINE");
  $('#streamPlayer').css('background-color','#fb0e1f');
  $('#streamPlayerControls').css('display','none');
}
var audioPlayer = document.querySelector('#streamPlayer');
var PlayPause = audioPlayer.querySelector('#playPause');
var playPauseBtn = audioPlayer.querySelector('.play-pause-btn');
var loading = audioPlayer.querySelector('.loading');
var player = audioPlayer.querySelector('audio');
var volumeBtn = audioPlayer.querySelector('.volume-btn');
var speaker = audioPlayer.querySelector('#speaker');

playPauseBtn.addEventListener('click',togglePlay);
volumeBtn.addEventListener('click',toggleVolume);
player.addEventListener('canplay',makePlay);

function toggleVolume() {
  if(player.muted === false) {
    speaker.attributes.d.value = "M258.1 173.6c2.9 2.9 2.9 7.7 0 10.6 -1.5 1.5-3.4 2.2-5.3 2.2 -1.9 0-3.8-0.7-5.3-2.2l-23.6-23.6 -23.6 23.6c-1.5 1.5-3.4 2.2-5.3 2.2 -1.9 0-3.8-0.7-5.3-2.2 -2.9-2.9-2.9-7.7 0-10.6l23.6-23.6 -23.6-23.6c-2.9-2.9-2.9-7.7 0-10.6 2.9-2.9 7.7-2.9 10.6 0l23.6 23.6 23.6-23.6c2.9-2.9 7.7-2.9 10.6 0 2.9 2.9 2.9 7.7 0 10.6L234.5 150 258.1 173.6zM150.3 42.2l-46.4 55.7c-0.5 0.6-1 1.3-1.5 2.1 -0.7-0.2-1.4-0.3-2.2-0.3H48.9c-4.9 0-8.9 4.7-8.9 10.4v86.8c0 5.7 4 10.4 8.9 10.4h51.4c0.8 0 1.5-0.1 2.2-0.3 0.5 0.8 1 1.5 1.5 2.2l46.4 55.7c3.4 4.1 6.2 2.8 6.2-3V45.2C156.5 39.4 153.7 38.1 150.3 42.2z";
    player.muted = true;
  }
}

function togglePlay() {
  if(player.paused) {
    playPause.attributes.d.value = "M52.3 46.1c0-5.5 4.5-10 10-10h45.3c5.5 0 10 4.5 10 10v207.8c0 5.5-4.5 10-10 10H62.3c-5.5 0-10-4.5-10-10V46.1zM192.4 36.1c-5.5 0-10 4.5-10 10v207.8c0 5.5 4.5 10 10 10h45.3c5.5 0 10-4.5 10-10V46.1c0-5.5-4.5-10-10-10H192.4z";
    player.play();
  } else {
    playPause.attributes.d.value = "M35.8 159.8c0-5.5 0-14.5 0-20V45.9c0-5.5 4-8 8.9-5.5l96.2 48c4.9 2.5 13 6.5 17.9 8.9l96.2 48c4.9 2.5 4.9 6.5 0 8.9l-96.2 48c-4.9 2.5-13 6.5-17.9 8.9l-96.2 48c-4.9 2.5-8.9 0-8.9-5.5V159.8z";
    player.pause();
  }
}

function makePlay() {
  playPauseBtn.style.display = 'block';
  loading.style.display = 'none';
}
