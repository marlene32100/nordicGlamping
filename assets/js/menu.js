$(document).ready(function () {
  $("#dots-container").click(function () {
    $("#menu-expanded").css("visibility", "visible");
  });

  $("#navbarMenuLink").click(function () {
    $("#menu-expanded").css("visibility", "visible");
  });

  $(".link-item").click(function () {
    $("#menu-expanded").css("visibility", "hidden");
  });

  $(".close-icon").click(function () {
    $("#menu-expanded").css("visibility", "hidden");
  });
});
