document.addEventListener("DOMContentLoaded", () => {
  $(".slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeigth: true,
  });
});
