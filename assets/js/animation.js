$(document).ready(function () {
  $(window).scroll(function () {
    $(".fadeIn").each(function (i) {
      $(this)
        .delay(i * 1000)
        .fadeIn(3000);
    });
  });
});
