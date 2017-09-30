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

playPauseBtn.addEventListener('click',togglePlay);
player.addEventListener('canplay',makePlay);

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
