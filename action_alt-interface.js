// Makes the DIV element draggable:
window.onload = function() {

    dragElement(document.getElementById("dragfly"));
    dragElement(document.getElementById("dragcastalt"));

};

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    // console.log(elmnt.id)
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

    window[elmnt.id + "pos"] = Math.round(parseInt((elmnt.offsetTop + elmnt.offsetLeft), 10)/50);
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var prev_handler = window.onload;
window.onload = function () {
  if (prev_handler) {
    prev_handler();
  }

// cast-of-characters _ tomorrow-started
  document.querySelector('.linkcastalt').onclick = function(){
    if(this.className.match('linkcastalt_italic')) {
        this.className = 'linkcastalt';
    }
    else {
        this.className = 'linkcastalt linkcastalt_italic';
    }
  };

// search
  document.querySelector('.linksearchalt').onclick = function(){
    if(this.className.match('linksearchalt_italic')) {
        this.className = 'linksearchalt';
    }
    else {
        this.className = 'linksearchalt linksearchalt_italic';
    }
  };

// shop
  document.querySelector('.linkshopalt').onclick = function(){
    if(this.className.match('linkshopalt_italic')) {
        this.className = 'linkshopalt';
    }
    else {
        this.className = 'linkshopalt linkshopalt_italic';
    }
  };

// listenup
  document.querySelector('.linklistenupalt').onclick = function(){
    if(this.className.match('linklistenupalt_italic')) {
        this.className = 'linklistenupalt';
    }
    else {
        this.className = 'linklistenupalt linklistenupalt_italic';
    }
  };

  // categories
  document.querySelector('.linkcategoriesalt').onclick = function(){
    if(this.className.match('linkcategoriesalt_italic')) {
        this.className = 'linkcategoriesalt';
    }
    else {
        this.className = 'linkcategoriesalt linkcategoriesalt_italic';
    }
  };

  // archives
    document.querySelector('.linkarchivesalt').onclick = function(){
      if(this.className.match('linkarchivesalt_italic')) {
          this.className = 'linkarchivesalt';
      }
      else {
          this.className = 'linkarchivesalt linkarchivesalt_italic';
      }
    };


}