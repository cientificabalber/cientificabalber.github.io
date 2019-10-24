$(function() {
  $(".home-slider, .owl-carousel").owlCarousel({
    loop: true,
    autoplay: false,
    margin: 0,
    nav: false,
    autoplayHoverPause: false,
    items: 1,
    navText: [
      "<span class='ion-md-arrow-back'></span>",
      "<span class='ion-chevron-right'></span>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  $("#menu-trigger").click(function() {
    $("nav").addClass("show-menu");
  });
  $("#close-menu").click(function() {
    $("nav").removeClass("show-menu");
  });

  setVh();

  $("#toggle-tips").click(function() {
    $(this).toggleClass("active");
    $(this)
      .find("span")
      .fadeToggle(100);
    $("#tips-list").slideToggle();
    return false;
  });
});

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: [0.2]
  }
);

const highlights = document.querySelectorAll(".highlight");
highlights.forEach(highlight => {
  observer.observe(highlight);
});

function setVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
