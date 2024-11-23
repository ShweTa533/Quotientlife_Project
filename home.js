function togglePlayPause(videoId) {
    var video = document.getElementById(videoId);
    var playButton = video.nextElementSibling;
  
    if (video.paused) {
      video.play();
      video.controls = true;
      video.classList.add("show-controls");
      playButton.style.display = "none";
    } else {
      video.pause();
      playButton.style.display = "block";
    }
  }
  