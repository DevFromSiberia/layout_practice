$(function () {

  $(".header__btn").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
    console.log('remove')
  });

  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
    console.log("adsd");
  });

});
