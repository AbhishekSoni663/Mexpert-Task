const videoElement = document.getElementById("videoElement");
const playButton = document.getElementById("playButton");

// Function to play the video
function playVideo() {
    if (videoElement.paused) {
        videoElement.play();
         videoPlayDiv.style.display = "none";
    } else {
        videoElement.pause();
           videoPlayDiv.style.display = "block";
    }
}


document.addEventListener("click", playVideo);





