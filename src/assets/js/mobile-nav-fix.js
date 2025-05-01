// Mobile Navigation Fix
$(document).ready(function() {
  // Toggle mobile menu when hamburger is clicked
  $(".greedy-nav__toggle").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(".visible-links").toggleClass("visible-mobile");
    $(this).toggleClass("close");
    console.log("Mobile menu toggled");
  });

  // Close menu when clicking outside
  $(document).on("click", function(e) {
    if (!$(e.target).closest(".greedy-nav").length) {
      $(".visible-links").removeClass("visible-mobile");
      $(".greedy-nav__toggle").removeClass("close");
    }
  });

  // Ensure the toggle button is visible on mobile
  function checkMobileNav() {
    if ($(window).width() <= 991) {
      $(".greedy-nav__toggle").css({
        "display": "block",
        "visibility": "visible"
      });
    }
  }

  // Run on page load and resize
  checkMobileNav();
  $(window).resize(checkMobileNav);
});
