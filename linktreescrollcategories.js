// not being used at the moment, the script is embedded within the index.html file
// need to resolve the window.onload event that clashes with the one in action.js

window.onload = function() {    
    
    const buttonRight = document.getElementById('slideDownshop');
    const buttonLeft = document.getElementById('slideUpshop');

    buttonRight.onclick = function () {
      document.getElementById('linktreelistshop').scrollBy(0, 30);
    };
    buttonLeft.onclick = function () {
      document.getElementById('linktreelistshop').scrollBy(0, -30);
    };
    
  };