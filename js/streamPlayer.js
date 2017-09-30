function setOffline()
{
  $('#streamStateLabel > span').text("OFFLINE");
  $('#streamStateLabel > p').css('display',block);
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
    speaker.attributes.d.value = "M253.8 173.6c2.9 2.9 2.9 7.7 0 10.6 -1.5 1.5-3.4 2.2-5.3 2.2 -1.9 0-3.8-0.7-5.3-2.2l-23.6-23.6 -23.6 23.6c-1.5 1.5-3.4 2.2-5.3 2.2 -1.9 0-3.8-0.7-5.3-2.2 -2.9-2.9-2.9-7.7 0-10.6l23.6-23.6 -23.6-23.6c-2.9-2.9-2.9-7.7 0-10.6 2.9-2.9 7.7-2.9 10.6 0l23.6 23.6 23.6-23.6c2.9-2.9 7.7-2.9 10.6 0 2.9 2.9 2.9 7.7 0 10.6L230.2 150 253.8 173.6zM152.6 41.7v216.7c0 5.7-2.8 7.1-6.2 3l-46.4-55.7c-0.5-0.6-1-1.4-1.5-2.2 -0.7 0.2-1.4 0.3-2.2 0.3H45c-4.9 0-8.9-4.7-8.9-10.4v-86.8c0-5.7 4-10.4 8.9-10.4h51.4c0.8 0 1.5 0.1 2.2 0.3 0.5-0.8 1-1.5 1.5-2.1l46.4-55.7C149.8 34.6 152.6 35.9 152.6 41.7z";
    player.muted = true;
  } else {
    speaker.attributes.d.value = "M152.5 42.2v216.7c0 5.7-2.8 7.1-6.2 3L100 206.1c-0.5-0.6-1-1.4-1.5-2.2 -0.7 0.2-1.4 0.3-2.2 0.3H44.9c-4.9 0-8.9-4.7-8.9-10.4v-86.8c0-5.7 4-10.4 8.9-10.4h51.4c0.8 0 1.5 0.1 2.2 0.3 0.5-0.8 1-1.5 1.5-2.1l46.4-55.7C149.7 35.1 152.5 36.4 152.5 42.2zM223.3 247.4c26.1-26.1 40.5-60.8 40.5-97.6 0-36.9-14.4-71.5-40.5-97.6 -2.5-2.5-6.5-2.5-9 0 -2.5 2.5-2.5 6.5 0 9 23.7 23.7 36.7 55.1 36.7 88.6 0 33.4-13 64.9-36.7 88.6 -2.5 2.5-2.5 6.5 0 9 1.2 1.2 2.9 1.9 4.5 1.9S222.1 248.7 223.3 247.4zM201.1 213.8c35.3-35.3 35.3-92.6 0-127.9 -2.5-2.5-6.5-2.5-9 0 -2.5 2.5-2.5 6.5 0 9 30.3 30.3 30.3 79.5 0 109.8 -2.5 2.5-2.5 6.5 0 9 1.2 1.2 2.9 1.9 4.5 1.9C198.2 215.6 199.8 215 201.1 213.8zM176.9 185.5c19.7-19.7 19.7-51.7 0-71.3 -2.5-2.5-6.5-2.5-9 0 -2.5 2.5-2.5 6.5 0 9 14.7 14.7 14.7 38.6 0 53.3 -2.5 2.5-2.5 6.5 0 9 1.2 1.2 2.9 1.9 4.5 1.9C174 187.4 175.7 186.7 176.9 185.5z";
    player.muted = false;
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
