document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.querySelector('.snow');
    const snowflakes = 100;

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
        snowflake.style.opacity = Math.random();
        snowflake.style.width = Math.random() * 10 + 2 + 'px';
        snowflake.style.height = snowflake.style.width;
        snowflake.style.animationDelay = Math.random() * 10 + 's';

        snowContainer.appendChild(snowflake);
        
        // Optionally remove the snowflake after its animation ends
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
            createSnowflake(); // Create a new snowflake when the old one finishes falling
        });
    }

    for (let i = 0; i < snowflakes; i++) {
        createSnowflake();
    }
});





document.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById("footer");
    const footerTrigger = document.getElementById("footer-trigger");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          footer.classList.add("visible"); // Показати футер
        } else {
          footer.classList.remove("visible"); // Сховати футер, якщо він більше не видимий
        }
      });
    }, {
      threshold: 1.0 // Тільки коли весь footer-trigger буде в полі зору
    });
  
    observer.observe(footerTrigger);
  });
  
  
  document.addEventListener("DOMContentLoaded", function() {
      const openButton = document.getElementById("openmodul");
      const closeButton = document.getElementById("closemodul");
      const modal = document.getElementById("modul");
  
      if (openButton && closeButton && modal) {
          openButton.addEventListener("click", function() {
              modal.classList.add("open");
              modal.classList.remove("closing"); // Ensure the closing class is removed when opening
          });
  
          closeButton.addEventListener("click", function() {
              modal.classList.add("closing");
              setTimeout(() => {
                  modal.classList.remove("open");
                  modal.classList.remove("closing");
              }, 500); // Match the duration of the transition
          });
      } else {
          console.error("One or more elements not found");
      }
  });