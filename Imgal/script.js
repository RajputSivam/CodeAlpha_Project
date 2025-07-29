
    const images = Array.from(document.querySelectorAll(".gallery img")).map(img => img.src);
    let currentIndex = 0;

    function openLightbox(index) {
      currentIndex = index;
      const lightbox = document.getElementById("lightbox");
      const lightboxImg = document.getElementById("lightbox-img");

      lightbox.style.display = "flex";
      lightboxImg.style.opacity = 0;
      lightboxImg.src = images[currentIndex];

      lightboxImg.onload = () => {
        lightboxImg.style.opacity = 1;
      };
    }

    function closeLightbox() {
      document.getElementById("lightbox").style.display = "none";
    }

    function changeImage(direction) {
      currentIndex += direction;

      if (currentIndex < 0) {
        currentIndex = images.length - 1;
      } else if (currentIndex >= images.length) {
        currentIndex = 0;
      }

      const lightboxImg = document.getElementById("lightbox-img");
      lightboxImg.style.opacity = 0;
      lightboxImg.src = images[currentIndex];

      lightboxImg.onload = () => {
        lightboxImg.style.opacity = 1;
      };
    }

    function applyFilter(filter) {
      const galleryImages = document.querySelectorAll(".gallery img");
      galleryImages.forEach(img => {
        img.style.filter = filter;
      });
    }