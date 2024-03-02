document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.querySelector(".openbtn");
  const headerNavMobileLinks = document.querySelector(
    ".header-nav-mobile-links"
  );
  const header = document.querySelector(".header");

  openBtn.addEventListener("click", function () {
    openBtn.classList.toggle("active");

    // Check if the openBtn has the active class
    if (openBtn.classList.contains("active")) {
      // If it has the active class, remove the 'hidden' attribute from header-nav-mobile-links
      headerNavMobileLinks.removeAttribute("hidden");
      // Add padding-bottom to .header based on screen width
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        header.style.paddingBottom = "280px";
      } else {
        header.style.paddingBottom = "200px";
      }
    } else {
      // If it doesn't have the active class, add the 'hidden' attribute to header-nav-mobile-links
      headerNavMobileLinks.setAttribute("hidden", true);
      // Remove padding-bottom from .header based on screen width
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        header.style.paddingBottom = "100px";
      } else if (screenWidth <= 1024) {
        header.style.paddingBottom = "0";
      }
    }
  });

  // Add event listener for window resize
  window.addEventListener("resize", function () {
    // Check if the screen width is larger than 1024px
    if (window.innerWidth > 1024) {
      // Remove padding from header
      header.style.paddingBottom = "0";
      // Remove active class from openBtn
      openBtn.classList.remove("active");
      // Add hidden attribute to headerNavMobileLinks
      headerNavMobileLinks.setAttribute("hidden", true);
    } else {
      // Check if the openBtn has the active class
      if (openBtn.classList.contains("active")) {
        // If the screen width is 768px or less, set padding to 280px, otherwise set it to 200px
        header.style.paddingBottom =
          window.innerWidth <= 768 ? "280px" : "200px";
      } else {
        // If the openBtn doesn't have the active class and the screen width is 1024px or less, remove the padding
        if (window.innerWidth <= 1024) {
          // Remove padding if screen width is larger than 768px, otherwise set it to 100px
          header.style.paddingBottom = window.innerWidth > 768 ? "0" : "100px";
          // Add hidden attribute to headerNavMobileLinks
          headerNavMobileLinks.setAttribute("hidden", true);
        }
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const generateBackToTop = document.querySelector(".generate-back-to-top");
  const sectionOne = document.querySelector(".section-one");

  window.addEventListener("scroll", function () {
    // Calculate the scroll position
    const scrollPosition = window.scrollY || window.pageYOffset;

    // Calculate 20% of the viewport height
    const viewportHeight = window.innerHeight;
    const twentyPercentViewport = viewportHeight * 0.2;

    // Calculate the distance from the top of sectionOne to the top of the viewport
    const sectionOneTop = sectionOne.getBoundingClientRect().top;

    // Check if the scroll position is greater than or equal to 20% of the viewport height and the top of sectionOne is in the viewport
    if (
      scrollPosition >= twentyPercentViewport &&
      sectionOneTop < viewportHeight
    ) {
      // Remove the 'hidden' attribute from generateBackToTop
      generateBackToTop.removeAttribute("hidden");
    } else {
      // Add the 'hidden' attribute to generateBackToTop
      generateBackToTop.setAttribute("hidden", true);
    }
  });
});
