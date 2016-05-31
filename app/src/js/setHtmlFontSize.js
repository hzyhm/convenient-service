!(function(){
  function setHtmlFontSize() {
    var deviceWidth = document.documentElement.clientWidth;

    deviceWidth = deviceWidth > 750 ? 750: deviceWidth;
    document.documentElement.style.fontSize = deviceWidth / 7.2 + "px";
  }

  window.onload = window.onresize = setHtmlFontSize;
  setHtmlFontSize();
})();