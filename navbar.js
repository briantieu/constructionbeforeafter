function expand() {
    const topNav = document.getElementById("top-nav");
    if (topNav.className.includes("expand")) {
      topNav.classList.remove("expand");
    } else topNav.classList.add("expand");
  }

  $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);

      const topNav = document.getElementById("top-nav");
      topNav.classList.remove("expand");
  });