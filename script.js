const videoEl = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select media stream, pass to video element, then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoEl.srcObject = mediaStream;
        videoEl.onloadedmetadata = () => {
            videoEl.play();
        }
    } catch(err){
        // catch error
        console.log(err)
    }
}

button.addEventListener('click', async () => {
    // Disable Buton
    button.disabled = true;
    //start picture in picture
    await videoEl.requestPictureInPicture();
    //reset button
    button.disabled = false;
});

// on load
selectMediaStream();