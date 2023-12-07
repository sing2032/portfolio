
// nav bar scroll
const navEl = document.querySelector(".navbar");

      window.addEventListener("scroll", () => {
        if (window.scrollY >= 60) {
          navEl.classList.add("navbar-scrolled");
        } else if (window.scrollY <60){
          navEl.classList.remove("navbar-scrolled");
        }
});

// typing text
var typed = new Typed('.auto-type', {
          strings: ['a Designer.', 'a Coder.', 'a Photographer.', 'an Artist.'],
          typeSpeed: 150,
          backSpeed:100,
          loop: true
});

// back to top button
const toTop = document.querySelector(".top-button");

          window.addEventListener("scroll", () => {
            if (window.scrollY> 100) {
              toTop.classList.add("active");
            } else {
              toTop.classList.remove("active");
            }
})

          