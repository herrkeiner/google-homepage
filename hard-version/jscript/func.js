function myFunction() {
  var x = document.getElementById("apps-section"),
      style = window.getComputedStyle(x);

  if (style.getPropertyValue('display') === "none")
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
      style = window.getComputedStyle(e),
      s = document.getElementById('sfilter-sdpul'),
      sdStyle = window.getComputedStyle(s);

  if (sdStyle.getPropertyValue('display') === 'block')
    s.style.display = 'none';

  if (style.getPropertyValue('display') === 'none')
    e.style.display = 'block';
  else e.style.display = 'none';

}

function showSettingsDropdown() {
  var e = document.getElementById('sfilter-sdpul'),
      style = window.getComputedStyle(e),
      m = document.getElementById('sfilter-mdpul'),
      mdStyle = window.getComputedStyle(m);

  if (mdStyle.getPropertyValue('display') === 'block')
    m.style.display = 'none';

  if (style.getPropertyValue('display') === 'none')
    e.style.display = 'block';
  else e.style.display = 'none';

}

function showSFOList() {
  var e = document.getElementById('search-filter-options'),
      style = window.getComputedStyle(e);

  if (style.getPropertyValue('opacity') === '0') {
    // display...
    e.style.opacity = '1';
    e.style.top = '140px';
    e.style.visibility = 'visible';
  } else {
    // Close the sfo-items-atc if it is displayed.
    var sfoAI = document.getElementById('sfo-items-atc');
    if (window.getComputedStyle(sfoAI).getPropertyValue('display') === 'block')
      sfoAI.style.display = 'none';

    e.style.opacity ='0';
    e.style.top = '115px';
    e.style.visibility = 'hidden';
  }

}

function showSFOItems() {
  var e = document.getElementById('sfo-items-atc'),
      style = window.getComputedStyle(e),
      s = document.getElementById('sfo-items-ar');

    //  if (s.style.display === 'block')
      //  s.style.display = 'none';

      if (style.getPropertyValue('display') === 'none')
        e.style.display = 'block';
      else e.style.display = 'none';
}
