(function () {
  "use strict";

  window.addEventListener("load", () => {
    on_page_load();
  });

  /**
   * Function gets called when page is loaded.
   */
  function on_page_load() {
    // Initialize On-scroll Animations
    AOS.init({
      anchorPlacement: "top-left",
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      disable: "mobile",
    });
  }

  /**
   * Navbar effects and scrolltop buttons upon scrolling
   
  const navbar = document.getElementById("header-nav");
  var body = document.getElementsByTagName("body")[0];
  const scrollTop = document.getElementById("scrolltop");
  window.onscroll = () => {
    if (window.scrollY > 0) {
      navbar.classList.add("fixed-top", "shadow-sm");
      body.style.paddingTop = navbar.offsetHeight + "px";
      scrollTop.style.visibility = "visible";
      scrollTop.style.opacity = 1;
    } else {
      navbar.classList.remove("fixed-top", "shadow-sm");
      body.style.paddingTop = "0px";
      scrollTop.style.visibility = "hidden";
      scrollTop.style.opacity = 0;
    }
  };
*/

  /* Navbar effects and scrolltop buttons upon scrolling */
  const navbar = document.getElementById("header-nav");
  var body = document.getElementsByTagName("body")[0];
  const scrollTop = document.getElementById("scrolltop");

  /* Mobile browser glitches due to navigation animation, tried to fix it */
  window.onload = () => {
    if (window.innerWidth < 1200) {
      navbar.classList.add("fixed-top", "shadow-sm");
    }
  };

  window.onscroll = () => {
    if (window.innerWidth < 1200) {
      navbar.classList.add("fixed-top", "shadow-sm");
    } else {
      if (window.scrollY > 0) {
        navbar.classList.add("fixed-top", "shadow-sm");
        body.style.paddingTop = navbar.offsetHeight + "px";
        scrollTop.style.visibility = "visible";
        scrollTop.style.opacity = 1;
      } else {
        navbar.classList.remove("fixed-top", "shadow-sm");
        body.style.paddingTop = "0px";
        scrollTop.style.visibility = "hidden";
        scrollTop.style.opacity = 0;
      }
    }
  };

  // Auto writing function
  function autoWrite(element, text, speed) {
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
  }

  // Get the element
  const introTitle = document.querySelector(".intro-title");

  // Call autoWrite with your text and speed (adjust as needed)
  autoWrite(introTitle, "I’m Saidur Rahman Sujon", 50);

  // Initialize AOS
  AOS.init();
})();
