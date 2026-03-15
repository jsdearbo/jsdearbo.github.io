// This script makes all external links open in a new tab (target="_blank")
// It runs after the DOM is loaded.
document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll('a[href^="http"], a[href^="mailto:"]');
  links.forEach(function(link) {
    // Only set target for links not on the same domain
    if (!link.href.startsWith(window.location.origin)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});
