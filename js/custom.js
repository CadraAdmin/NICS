$(function () {
  "use strict";

  /* -------- preloader ------- */
  $(window).on("load", function () {
    $("#preloader").delay(2000).fadeOut(500);
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 0) {
      $(".header, .top-scrolling").addClass("sticky");
    } else {
      $(".header, .top-scrolling").removeClass("sticky");
    }
  });
  $(".scrollTo").on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      1000
    );
  });

  function responsive_menu() {
    /*------------ Responsive Menu ---------*/
    $(".menu-toggle").on("click", function () {
      $(".menu-toggle").toggleClass("active");
      $(".main-menu").slideToggle();
    });

    /* ---- For Mobile Menu Dropdown JS Start ---- */
    $(".main-menu span.opener").on("click", function () {
      if ($(this).hasClass("plus")) {
        $(this).parent().find(".megamenu").slideDown();
        $(this).removeClass("plus");
        $(this).addClass("minus");
      } else {
        $(this).parent().find(".megamenu").slideUp();
        $(this).removeClass("minus");
        $(this).addClass("plus");
      }
      return false;
    });
    /*------------ Responsive Cart Dropdown ---------*/
    $(".cart").on("click", function () {
      $(".cart-dropdown").toggleClass("open");
    });
  }
  $(document).ready(function () {
    responsive_menu();
  });

  /* ---- Search box ---- */
  function search_box() {
    $(".search a").on("click", function () {
      if ($(window).width()) {
        $(".sidebar-search-wrap").addClass("open");
      }
    });
    $(".search-closer").on("click", function () {
      if ($(window).width()) {
        $(".sidebar-search-wrap").removeClass("open");
      }
    });
  }
  $(document).ready(function () {
    search_box();
  });
  /* ---- Search box End ---- */

  /*------------ Home Slider ---------*/
  if ($(".home-slider").length > 0) {
    $(".home-slider").owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      mouseDrag: false,
      autoplay: true,
      autoplaySpeed: 1000,
      autoplayTimeout: 5000,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          dots: true,
          nav: false,
        },
        992: {
          items: 1,
          dots: false,
          nav: true,
        },
      },
    });
  }
  /*------------ Home Slider End ---------*/

  /*------------ New Product Slider ---------*/
  if ($(".new-product-slider").length > 0) {
    $(".new-product-slider").owlCarousel({
      items: 4,
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      mouseDrag: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
      },
    });
  }
  /*------------ New Product End ---------*/

  /*------------ Testimoniyal Slider Slider ---------*/
  if ($(".testimoniyal-slider").length > 0) {
    $(".testimoniyal-slider").owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      mouseDrag: false,
      autoplaySpeed: 1000,
      autoplay: true,
      autoplayTimeout: 5000,
    });
  }
  /*------------ New Product End ---------*/

  /*------------ Blog Slider Slider ---------*/
  if ($(".blog-slider").length > 0) {
    $(".blog-slider").owlCarousel({
      items: 2,
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      mouseDrag: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: true,
        },
        768: {
          items: 2,
          nav: true,
          dots: false,
        },
      },
    });
  }
  /*------------ blog End ---------*/

  /*------------ Brand Slider ---------*/
  if ($(".brand-salider").length > 0) {
    $(".brand-salider").owlCarousel({
      loop: true,
      dots: false,
      nav: true,
      items: 6,
      mouseDrag: false,
      autoplayHoverPause: true,
      autoplaySpeed: 1000,
      autoplay: true,
      autoplayTimeout: 5000,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
          dots: true,
          nav: false,
        },
        768: {
          items: 4,
          dots: false,
          nav: true,
        },
        992: {
          items: 6,
        },
        1200: {
          items: 6,
        },
      },
    });
  }
  /*------------ Brand Slider End ---------*/

  /* ---- Category Sidebar JS Start ---- */
  $(".category-drop-down > li > a, .category-drop-down span.opener").on(
    "click",
    function () {
      if ($(this).parent(".category-drop-down li").hasClass("active")) {
        $(this).parent().find(".category-sub").slideUp();
        $(this).parent(".category-drop-down > li").removeClass("active");
        $(this).parent().find("span.opener").addClass("plus");
        $(this).parent().find("span.opener").removeClass("minus");
      } else {
        $(this).parent().find(".category-sub").slideDown();
        $(this).parent(".category-drop-down > li").addClass("active");
        $(".category-drop-down li.active span.opener").addClass("minus");
        $(".category-drop-down li.active span.opener").removeClass("plus");
      }
      return false;
    }
  );
  /* ---- Category Sidebar JS End ---- */

  /* ---- Product quantity plus minus JS ---- */
  $(".add").click(function () {
    if ($(this).prev().val()) {
      $(this)
        .prev()
        .val(+$(this).prev().val() + 1);
    }
  });
  $(".sub").click(function () {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1)
        $(this)
          .next()
          .val(+$(this).next().val() - 1);
    }
  });
  /* ---- Product quantity plus minus JS  End---- */

  /* ---- Quick Popup JS ---- */
  if ($(".quick-popup").length > 0) {
    $(".quick-popup").magnificPopup({
      type: "iframe",
      removalDelay: 300,

      mainClass: "mfp-fade",
    });
  }

  /* ---- For Footer JS Start ---- */
  $(".footer-static .footer-title, .footer-static span.opener").on(
    "click",
    function () {
      if ($(this).parent(".footer-static").hasClass("active")) {
        if ($(window).width() < 768) {
          $(this).parent().find(".footer-block-contant").slideUp();
          $(this).parent(".footer-static").removeClass("active");
          $(this).parent().find("span.opener").addClass("plus");
          $(this).parent().find("span.opener").removeClass("minus");
        }
      } else {
        if ($(window).width() < 768) {
          $(this).parent().find(".footer-block-contant").slideDown();
          $(this).parent(".footer-static").addClass("active");
          $(".footer-static.active span.opener").addClass("minus");
          $(".footer-static.active span.opener").removeClass("plus");
        }
      }
      return false;
    }
  );
  $(".contactfrm").on("submit", function (e) {
    e.preventDefault();
    $(this).children(".contactfrmmsg").slideDown("slow");
  });
});
