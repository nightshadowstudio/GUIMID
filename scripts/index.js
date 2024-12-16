(function (window, document, undefined) {
  window.onload = init;

  function init() {
    var splash = document.getElementById("splash");
    var next = document.getElementById("next");

    next.onclick = (el) => {
    
        splash.style.transition = "all 1s";
    
        splash.style.opacity = "0";

    
        splash.addEventListener("transitionend", function () {
    
            splash.remove();
    
        });
    };
  }
})(window, document, undefined);
