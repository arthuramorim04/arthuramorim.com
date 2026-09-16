document.querySelectorAll('[data-carousel]').forEach(function (root) {
  var track = root.querySelector('.carousel-track');
  var slides = Array.prototype.slice.call(track.children);
  var dotsWrap = root.querySelector('.carousel-dots');
  var prevBtn = root.querySelector('.carousel-prev');
  var nextBtn = root.querySelector('.carousel-next');

  slides.forEach(function (_, i) {
    var dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Ir para imagem ' + (i + 1));
    dot.addEventListener('click', function () { goTo(i); });
    dotsWrap.appendChild(dot);
  });
  var dots = Array.prototype.slice.call(dotsWrap.children);

  function currentIndex() {
    var trackRect = track.getBoundingClientRect();
    var center = trackRect.left + trackRect.width / 2;
    var closest = 0;
    var closestDist = Infinity;
    slides.forEach(function (slide, i) {
      var r = slide.getBoundingClientRect();
      var dist = Math.abs(r.left + r.width / 2 - center);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    return closest;
  }

  function goTo(index) {
    index = Math.max(0, Math.min(slides.length - 1, index));
    slides[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }

  prevBtn.addEventListener('click', function () { goTo(currentIndex() - 1); });
  nextBtn.addEventListener('click', function () { goTo(currentIndex() + 1); });

  track.setAttribute('tabindex', '0');
  track.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { goTo(currentIndex() + 1); e.preventDefault(); }
    if (e.key === 'ArrowLeft') { goTo(currentIndex() - 1); e.preventDefault(); }
  });

  var ticking = false;
  track.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var idx = currentIndex();
      dots.forEach(function (d, i) { d.classList.toggle('active', i === idx); });
      ticking = false;
    });
  }, { passive: true });
});
