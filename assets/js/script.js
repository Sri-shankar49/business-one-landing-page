function openNav() {
  document.querySelector(".side-menu").style.width = "350px";
  document.querySelector(".whole-sidemenu").style.width = "100%";
}

function closeNav() {
  document.querySelector(".side-menu").style.width = "0px";
  document.querySelector(".whole-sidemenu").style.width = "0%";
}


document.addEventListener('DOMContentLoaded', function () {
  const showPopupButton = document.getElementById('showPopup');
  const closePopupButton = document.getElementById('closePopup');
  const popup = document.getElementById('popup');
  const videoFrame = document.getElementById('videoFrame');

  showPopupButton.addEventListener('click', function () {
      popup.style.display = 'block';
  });

  closePopupButton.addEventListener('click', function () {
      popup.style.display = 'none';
      videoFrame.src = ''; // Pause the video when closing the popup
  });
});