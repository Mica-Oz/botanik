$(document).ready(function () {
  $(".prac").click(function () {
    let prac = $(this);
    prac.toggleClass("expanded");
    if (prac.hasClass("expanded")) {
    }
    // prac.children(".offerings").fadeOut();

    // prac.siblings().children(".offerings").fadeOut();
    prac.find(".prac-sub").slideToggle();
  });
});
