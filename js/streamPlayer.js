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

playpauseBtn.addEventListener('click',togglePlay);

function togglePlay() {
  if(player.paused) {
    playPause.attributes.d.value ="M0 0h6v24H0zM12 0h6v24h-6z";
    player.play();
  } else {
    playPause.attributes.d.value ="M18 12L0 24V0"
    player.pause();
  }
}

function makePlay() {
  playpauseBtn.style.display = 'block';
  loading.style.display = 'none';
}
