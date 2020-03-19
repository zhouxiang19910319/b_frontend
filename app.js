// Collapsible Init
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
  });

// Expandable Collapse
var elem = document.querySelector('.collapsible.expandable');
var instance = M.Collapsible.init(elem, {
  accordion: false
});

// Tabs
window.addEventListener("DOMContentLoaded", event => {
  const options = {
    duration: 300,
    onShow: null,
    swipeable: false,
    responsiveThreshold: Infinity
  };

  const tabsContainer = document.querySelector(".nav-content .tabs");
  M.Tabs.init(tabsContainer, options);
});

// Feature Discovery
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tap-target');
  var instances = M.TapTarget.init(elems, options);
  var instance = M.TapTarget.getInstance(elem);
});
