// link trees

/*

// shop
function shopToggle() {
  var x = document.getElementById("shop");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
// listen up
function listenupToggle() {
  var x = document.getElementById("listenup");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
// references
function referencesToggle() {
  var x = document.getElementById("references");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

*/

// posts
function postToggle() {
    var x = document.getElementById("post");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

// archives  
  function archivesToggle() {
    var x = document.getElementById("archives");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

// categories
  function categoriesToggle() {
    var x = document.getElementById("categories");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

//cast-of-character _tomorrowstarted_
  function castToggle() {
    var x = document.getElementById("cast");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

// for alternative interface !

function searchaltToggle() {
  var x = document.getElementById("searchalt");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

// archives
function archivesaltToggle() {
  var x = document.getElementById("archivesalt");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function categoriesaltToggle() {
  var x = document.getElementById("categoriesalt");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
function listenupaltToggle() {
  var x = document.getElementById("listenupalt");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
function shopaltToggle() {
  var x = document.getElementById("shopalt");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
  

const buttonElements = Array.from(document.querySelectorAll('.button'));
buttonElements.forEach(buttonElement => {
  buttonElement.addEventListener('click', () => { 
    const activeElements = Array.from(document.querySelectorAll('.is-active'));
    activeElements.forEach(activeElement => {
      activeElement.classList.remove('is-active');
    });
    buttonElement.parentElement.classList.add('is-active');
  });
});
