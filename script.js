$(document).ready(function () {
  $(".prac").click(function () {
    let prac = $(this);
    prac.toggleClass("expanded");
    if (prac.hasClass("expanded")) {
      prac.siblings().hide();
      prac.animate({ width: "79vw" });

      prac.find(".prac-sub").slideToggle();
    } else {
      prac.find(".prac-sub").slideToggle();
      prac.animate({ width: "26vw" }, 400, function () {
        prac.siblings().show();
      });
    }
  });
});
