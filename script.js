window.onscroll = function () {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll("ul li a");

  if (window.pageYOffset > 50) {
    navbar.style.backgroundColor = "antiquewhite";

    navLinks.forEach((links) => {
      links.style.color = "black";
    });
  } else {
    navbar.style.backgroundColor = "transparent";

    navLinks.forEach((links) => {
      links.style.color = "white";
    });
  }
};

// end of navbar animation


// MODAL 

const modal = document.querySelector(".modal");
const pages = document.querySelectorAll(".page");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let currentPage = 0;

// Function to show the specified page and hide others
function showPage(pageIndex) {
  pages.forEach((page, index) => {
    if (index === pageIndex) {
      page.style.display = "block";
    } else {
      page.style.display = "none";
    }
  });
}

// Open the modal when the button is clicked

openBtn.addEventListener("click", () => {
  modal.classList.add("active");
  currentPage = 0; // Reset to the first page when modal opens
  showPage(currentPage);
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Close the modal if the background is clicked
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("active");
  }
});

// Event listeners for next and previous buttons
nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});


// END OF MODAL



// intersection observer
const elements = document.querySelectorAll("p, h2");

const options = {
  root: null,

  rootMargin: "0px",

  threshold: 0.4,
};

const callbacks = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.tagName === "H2") {
        entry.target.classList.add("slide-top");
      } else if (entry.target.tagName === "P") {
        entry.target.classList.add("slide-right");
      }
    }
  });
};

let observer = new IntersectionObserver(callbacks, options);

elements.forEach((element) => {
  observer.observe(element);
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

