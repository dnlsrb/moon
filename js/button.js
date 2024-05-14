document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the button
  var fullscreenButton = document.getElementById("fullscreenButton");
  var audioPlayer = document.getElementById("audioPlayer");
 

  // Function to request fullscreen mode
  function requestFullscreen() {
    var elem = document.documentElement; // Get the root element (usually <html>)

    // Check if fullscreen mode is supported by the browser
    if (elem.requestFullscreen) {
      // Trigger fullscreen mode
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }

  // Function to play the audio
  function playAudio() {
    var audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.play();
  }

  // Event listener for the button click
  fullscreenButton.addEventListener("click", function () {
    // Add the script dynamically

    
    var scriptElement = document.createElement("script");
    scriptElement.src = "js/script.js";
    document.body.appendChild(scriptElement);

    // hide
    fullscreenButton.style.display = "none";
    audioPlayer.style.display = "block";
 
    // Trigger fullscreen mode
    requestFullscreen();

    // Play the audio
    playAudio();
  });
});