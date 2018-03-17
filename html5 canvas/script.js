const images = document.querySelectorAll(".slide-in"); 
function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

function slideImage() {
  images.forEach(image => {
    let slideInAt = (window.scrollY + window.innerHeight) - image.height/2;
    let imageBottom = image.offsetTop + image.height;
    if(slideInAt>image.offsetTop && window.scrollY<imageBottom ) {
      image.classList.add("active");
    } 
    else {
      image.classList.remove("active");
    }
  })
}

window.addEventListener("scroll", debounce(slideImage));