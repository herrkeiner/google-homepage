function myFunction() {
  var x = document.getElementById("apps-section");

  if (x.style.display === "none")
    x.style.display = "block";
  else {
    x.style.display = "none";
    document.getElementById('apps-section').style.overflowY = 'hidden';
    document.getElementById('more-menu-section').style.display = 'none';
    document.getElementById('moreBtn').style.display = 'block';
  }
}

function showMore() {
    document.getElementById('moreBtn').style.display = 'none';
    document.getElementById('apps-section').style.overflowY = 'scroll';
    document.getElementById('more-menu-section').style.display = 'block';
}

function showMoreDropDown() {
  
}
