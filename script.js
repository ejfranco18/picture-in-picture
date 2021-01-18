const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    } 
  } catch (error){
    console.log('Something went wrong: ', error);
  }
}

button.addEventListener('click', async () => {
  // Disable button
  button.disable = true;
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  //Enable button
  button.disable = false;

})

// On Load
selectMediaStream();