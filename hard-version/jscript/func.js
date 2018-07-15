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

function showMoreDropdown() {
  var e = document.getElementById('sfilter-mdpul'),
      s = document.getElementById('sfilter-sdpul');

  if (s.style.display === 'block')
    s.style.display = 'none';

  if (e.style.display === 'none')
    e.style.display = 'block';
  else e.style.display = 'none';

}

function showSettingsDropdown() {
  var e = document.getElementById('sfilter-sdpul'),
      m = document.getElementById('sfilter-mdpul');

  if (m.style.display === 'block')
    m.style.display = 'none';

  if (e.style.display === 'none')
    e.style.display = 'block';
  else e.style.display = 'none';

}
