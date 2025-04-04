document.querySelector("body").addEventListener("mousemove", function(event) {
    const eyes = document.querySelectorAll(".eyes");
    eyes.forEach(function(eye) {
      let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
      let radian = Math.atan2(event.pageX - x, event.pageY - y);
      let rotation = radian * (180 / Math.PI);
      eye.style.transform = `rotate(${rotation}deg)`;
    });
  });
  