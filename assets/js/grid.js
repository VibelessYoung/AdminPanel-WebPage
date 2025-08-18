$(document).ready(function () {

  function removeToggleClass() {
    $("#toggle-on").removeClass("d-md-inline");
    $("#toggle-on").removeClass("d-none");
    $("#toggle-off").removeClass("d-inline");
    $("#toggle-off").removeClass("d-md-none");
  }

  $("#toggle-on").click(function () {

    $(".sidebar").fadeOut(400);

    setTimeout(function () {
      removeToggleClass();
      $("#toggle-on").addClass("d-none");
      $("#toggle-off").removeClass("d-none");
    }, 400);
  });

  $("#toggle-off").click(function () {

    $(".sidebar").fadeIn(400);

    setTimeout(function () {
      removeToggleClass();
      $("#toggle-on").removeClass("d-none");
      $("#toggle-off").addClass("d-none");
    }, 400);
  });

  $("#menu-toggle").click(function () {

    $("#body-header").toggle(400);
  });

  $("#search-toggle").click(function () {

    $("#search-toggle").removeClass("d-md-inline");
    $("#search-area").addClass("d-md-inline");
    $("#search-input").animate({ width: "12rem" }, 400);
  });

  $("#search-area-hide").click(function () {

    $("#search-input").animate({ width: "0" }, 400);

    setTimeout(function () {
      $("#search-toggle").addClass("d-md-inline");
      $("#search-area").removeClass("d-md-inline");
    }, 400);
  });

  $("#header-notification-toggle").click(function () {

    $("#header-notification").fadeToggle();
  });

  $("#header-comment-toggle").click(function () {

    $("#header-comment").fadeToggle();
  });

  $("#header-profile-toggle").click(function () {

    $("#header-profile").fadeToggle();
  });

  $(".sidebar-group-link").click(function () {
    
    $(".sidebar-group-link").removeClass("sidebar-group-link-active");
    $(".sidebar-group-link")
      .children(".sidebar-dropdown-toggle")
      .children(".angel")
      .removeClass("fa-angle-down")
      .addClass("fa-angle-left");

    $(this).addClass("sidebar-group-link-active");
    $(this)
      .children(".sidebar-dropdown-toggle")
      .children(".angel")
      .removeClass("fa-angle-left")
      .addClass("fa-angle-down");
  });
});
