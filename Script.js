let But = document.querySelector("button"),
  Vid = document.querySelector("video");
mediaDevices = navigator.mediaDevices;
document.addEventListener("DOMContentLoaded", () => {
  Vid.muted = true;
  But.addEventListener("click", () => {
    alert("The live video begins shortly");
    mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        Vid.srcObject = stream;
        Vid.addEventListener("loadedmetadata", () => {
          Vid.play;
        });
      })
      .catch(alert);
  });
});
