jQuery(
  (function ($) {
    "use strict";

    // Start Menu JS
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 50) {
        $(".main-nav").addClass("menu-shrink");
      } else {
        $(".main-nav").removeClass("menu-shrink");
      }
    });

    // Mean Menu JS
    jQuery(".mean-menu").meanmenu({
      meanScreenWidth: "991",
    });

    // Search Box JS
    $(".search-toggle").addClass("closed");
    $(".search-toggle .search-icon").on("click", function (e) {
      if ($(".search-toggle").hasClass("closed")) {
        $(".search-toggle").removeClass("closed").addClass("opened");
        $(".search-toggle, .search-area").addClass("opened");
        $("#search-terms").focus();
      } else {
        $(".search-toggle").removeClass("opened").addClass("closed");
        $(".search-toggle, .search-area").removeClass("opened");
      }
    });

    // Sidebar Modal
    $(document).ready(function () {
      $(".modal a")
        .not(".dropdown-toggle")
        .on("click", function () {
          $(".modal").modal("hide");
        });
    });

    // About Slider JS
    $(".about-img-slider").owlCarousel({
      items: 1,
      loop: true,
      margin: 15,
      singleItem: true,
      nav: false,
      dots: true,
      animateOut: "fadeOut",
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 1,
        },
      },
    });

    // Odometer JS

    // Foreign Slider JS
    $(".foreign-slider").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });

    // Offer Slider JS
    $(".offer-slider").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });

    // Testimonial Slider JS
    $(".testimonial-slider").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: false,
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 2,
        },
      },
    });

    // Popup Youtube JS

    // Accordion JS
    $(".accordion > li:eq(0) a").addClass("active").next().slideDown();
    $(".accordion a").on("click", function (j) {
      var dropDown = $(this).closest("li").find("p");
      $(this).closest(".accordion").find("p").not(dropDown).slideUp();
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this).closest(".accordion").find("a.active").removeClass("active");
        $(this).addClass("active");
      }
      dropDown.stop(false, true).slideToggle();
      j.preventDefault();
    });

    // Timer JS
    let getDaysId = document.getElementById("days");
    if (getDaysId !== null) {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      let countDown = new Date("July 30, 2026 00:00:00").getTime();
      setInterval(function () {
        let now = new Date().getTime();
        let distance = countDown - now;

        (document.getElementById("days").innerText = Math.floor(
          distance / day
        )),
          (document.getElementById("hours").innerText = Math.floor(
            (distance % day) / hour
          )),
          (document.getElementById("minutes").innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.getElementById("seconds").innerText = Math.floor(
            (distance % minute) / second
          ));
      }, second);
    }

    // Preloader JS
    jQuery(window).on("load", function () {
      jQuery(".loader").fadeOut(500);
    });

    // Back to Top JS
    $("body").append(
      '<div id="toTop" class="back-to-top-btn"><i class="bx bxs-up-arrow-alt"></i></div>'
    );
    $(window).scroll(function () {
      if ($(this).scrollTop() != 0) {
        $("#toTop").fadeIn();
      } else {
        $("#toTop").fadeOut();
      }
    });
    $("#toTop").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 0);
      return false;
    });

    // Switch Btn
    $("body").append(
      "<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>"
    );
  })(jQuery)
);

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("robtic_theme", themeName);
  document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
