// Makes the DIV element draggable:
window.onload = function() {

    dragElement(document.getElementById("dragspider"));
    dragElement(document.getElementById("dragshop"));
    dragElement(document.getElementById("draglistenup"));
    dragElement(document.getElementById("dragreferences"));
    dragElement(document.getElementById("dragarchives"));
    dragElement(document.getElementById("dragpost"));
    dragElement(document.getElementById("dragcast"));
    dragElement(document.getElementById("dragrandomizer"));
    dragElement(document.getElementById("dragmenu"));


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

// to toggle italic and normal when certain elements are clicked (actived/inactive)

// archives
document.querySelector('.linkarchives').onclick = function(){
  if(this.className.match('linkarchives_italic')) {
      this.className = 'linkarchives';
  }
  else {
      this.className = 'linkarchives linkarchives_italic';
  }
};

// categories
document.querySelector('.linkcategories').onclick = function(){
  if(this.className.match('linkcategories_italic')) {
      this.className = 'linkcategories';
  }
  else {
      this.className = 'linkcategories linkcategories_italic';
  }
};

// posts
document.querySelector('.linkpost').onclick = function(){
  if(this.className.match('linkpost_italic')) {
      this.className = 'linkpost';
  }
  else {
      this.className = 'linkpost linkpost_italic';
  }
};

// cast-of-characters _ tomorrow-started
document.querySelector('.linkcast').onclick = function(){
  if(this.className.match('linkcast_italic')) {
      this.className = 'linkcast';
  }
  else {
      this.className = 'linkcast linkcast_italic';
  }
};

// cast-of-characters _ tomorrow-started
document.querySelector('.linkrandomizer').onclick = function(){
  if(this.className.match('linkrandomizer_italic')) {
      this.className = 'linkrandomizer';
  }
  else {
      this.className = 'linkrandomizer linkrandomizer_italic';
  }
};

// search
document.querySelector('.linksearch').onclick = function(){
  if(this.className.match('linksearch_italic')) {
      this.className = 'linksearch';
  }
  else {
      this.className = 'linksearch linksearch_italic';
  }
};
}

// presently, not in use
/*
// linktrees
document.querySelector('.linkshop').onclick = function(){
  if(this.className.match('linkshop_italic')) {
      this.className = 'linkshop';
  }
  else {
      this.className = 'linkshop linkshop_italic';
  }
};
document.querySelector('.linklistenup').onclick = function(){
  if(this.className.match('linklistenup_italic')) {
      this.className = 'linklistenup';
  }
  else {
      this.className = 'linklistenup linklistenup_italic';
  }
};
document.querySelector('.linkreferences').onclick = function(){
  if(this.className.match('linkreferences_italic')) {
      this.className = 'linkreferences';
  }
  else {
      this.className = 'linkreferences linkreferences_italic';
  }
};
*/

