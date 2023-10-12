// link trees
// categories
function categoriesToggle() {
  var x = document.getElementById("categories");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

// categories
function shopToggle() {
  var x = document.getElementById("shop");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

// footer menu post _tomorrow started_
function postToggle() {
    var x = document.getElementById("post");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }

//footer menu archives  
  function archivesToggle() {
    var x = document.getElementById("archives");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }