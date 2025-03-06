document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute("data-width");
            entry.target.classList.add("animate-progress");
          }
        });
      },
      { threshold: 0.3 } 
    );
  
    progressBars.forEach((bar) => observer.observe(bar));
  });
  



  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter .item h3");
    const speed = 100; 
  
    const startCounting = (counter) => {
      const target = +counter.innerText; 
      let count = 0;
      const increment = target / speed;
  
      const updateCounter = () => {
        count += increment;
        if (count < target) {
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target; 
        }
      };
      
      updateCounter();
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounting(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 }); 
  
    counters.forEach((counter) => observer.observe(counter));
  });
  