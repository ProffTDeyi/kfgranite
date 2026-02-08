const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slides img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots');

    let index = 0;
    let interval;

    // Create dots
    slideImages.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => showSlide(i));
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updateDots() {
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }

    function showSlide(i) {
      if (i < 0) {
        index = slideImages.length - 1;
      } else if (i >= slideImages.length) {
        index = 0;
      } else {
        index = i;
      }
      slides.style.transform = `translateX(${-index * 100}%)`;
      updateDots();
      resetAutoSlide();
    }

    prevBtn.addEventListener('click', () => showSlide(index - 1));
    nextBtn.addEventListener('click', () => showSlide(index + 1));

    function startAutoSlide() {
      interval = setInterval(() => {
        showSlide(index + 1);
      }, 4000);
    }

    function resetAutoSlide() {
      clearInterval(interval);
      startAutoSlide();
    }

    startAutoSlide();

    function sendToWhatsApp() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let whatsappNumber = "263780103351"; // replace with your number

  let url = "https://wa.me/" + whatsappNumber + 
            "?text=" + encodeURIComponent(
              "New Granite Design Inquiry\n\n" +
              "Name: " + name + "\n" +
              "Phone: " + phone + "\n\n" +
              "Message:\n" + message
            );

  window.open(url, "_blank");
}
