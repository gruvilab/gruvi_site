(function () {
  'use strict';

  var mobileNav = document.querySelector('.mobile-nav');
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { mobileNav.removeAttribute('open'); });
    });
  }

  // Publication search and year filter.
  var search = document.getElementById('publication-search');
  var year = document.getElementById('publication-year');
  var status = document.getElementById('publication-status');
  var empty = document.getElementById('publication-empty');
  var entries = Array.prototype.slice.call(document.querySelectorAll('[data-search]'));

  function filterPublications() {
    var query = search.value.trim().toLowerCase();
    var selectedYear = year.value;
    var visibleYears = {};
    var count = 0;

    entries.forEach(function (entry) {
      var show = (!query || entry.getAttribute('data-search').indexOf(query) !== -1) &&
        (selectedYear === 'all' || entry.getAttribute('data-year') === selectedYear);
      entry.hidden = !show;
      if (!show) return;
      count += 1;
      visibleYears[entry.getAttribute('data-year')] = true;
    });

    document.querySelectorAll('[data-year-heading]').forEach(function (heading) {
      heading.hidden = !visibleYears[heading.getAttribute('data-year-heading')];
    });

    var filtering = query || selectedYear !== 'all';
    if (status) status.textContent = filtering ? count + (count === 1 ? ' match' : ' matches') : '';
    if (empty) empty.hidden = count !== 0;
  }

  if (search && year) {
    search.addEventListener('input', filterPublications);
    year.addEventListener('change', filterPublications);
    filterPublications();
  }

  // Horizontal news rail on the home page.
  var rail = document.querySelector('[data-rail]');
  if (rail) {
    var previous = document.querySelector('[data-rail-prev]');
    var next = document.querySelector('[data-rail-next]');
    var updateRail = function () {
      var end = rail.scrollWidth - rail.clientWidth;
      previous.disabled = rail.scrollLeft <= 2;
      next.disabled = rail.scrollLeft >= end - 2;
    };
    previous.addEventListener('click', function () { rail.scrollBy({ left: -rail.clientWidth, behavior: 'smooth' }); });
    next.addEventListener('click', function () { rail.scrollBy({ left: rail.clientWidth, behavior: 'smooth' }); });
    rail.addEventListener('scroll', updateRail, { passive: true });
    window.addEventListener('resize', updateRail);
    updateRail();
  }

  // People page: select a lab to keep its members in colour and grey out everyone else.
  var labButtons = document.querySelectorAll('[data-lab-filter]');
  if (labButtons.length) {
    var labGrid = document.querySelector('.lab-grid');
    var labHint = document.querySelector('[data-lab-hint]');
    var hintText = labHint ? labHint.innerHTML : '';
    var memberCards = document.querySelectorAll('.profile-card');
    var activeLab = null;

    var applyLab = function (labId) {
      activeLab = labId;
      var matches = 0;
      document.body.classList.toggle('is-lab-filtering', !!labId);
      labGrid.classList.toggle('has-selection', !!labId);
      labButtons.forEach(function (button) {
        var selected = button.getAttribute('data-lab-filter') === labId;
        button.setAttribute('aria-pressed', selected ? 'true' : 'false');
        button.parentNode.classList.toggle('is-selected', selected);
      });
      memberCards.forEach(function (card) {
        var labs = (card.getAttribute('data-labs') || '').split(' ');
        var match = !!labId && labs.indexOf(labId) !== -1;
        card.classList.toggle('is-lab-match', match);
        if (match) matches += 1;
      });
      if (!labHint) return;
      if (!labId) { labHint.innerHTML = hintText; return; }
      var name = document.querySelector('[data-lab-filter="' + labId + '"] strong').textContent;
      labHint.innerHTML = 'Highlighting <strong></strong> · ' + matches + (matches === 1 ? ' person' : ' people') +
        ' <button type="button" data-lab-clear>Show everyone</button>';
      labHint.querySelector('strong').textContent = name;
      labHint.querySelector('[data-lab-clear]').addEventListener('click', function () { applyLab(null); });
    };

    labButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var labId = button.getAttribute('data-lab-filter');
        applyLab(activeLab === labId ? null : labId);
      });
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && activeLab) applyLab(null);
    });
  }

  // About page: switch between group photos by year.
  var gallery = document.querySelector('[data-gallery]');
  if (gallery) {
    var galleryImage = gallery.querySelector('[data-gallery-image]');
    var galleryCaption = gallery.querySelector('[data-gallery-caption]');
    var galleryButtons = gallery.querySelectorAll('button[data-src]');
    galleryButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        if (button.classList.contains('is-active')) return;
        galleryButtons.forEach(function (other) {
          other.classList.toggle('is-active', other === button);
          other.setAttribute('aria-pressed', other === button ? 'true' : 'false');
        });
        var year = button.getAttribute('data-year');
        galleryImage.classList.add('is-fading');
        setTimeout(function () {
          galleryImage.src = button.getAttribute('data-src');
          galleryImage.alt = 'GrUVi faculty and students, ' + year;
          galleryCaption.textContent = 'The GrUVi community · ' + year;
          galleryImage.classList.remove('is-fading');
        }, 180);
      });
    });
  }

  // Only play preview videos while they are on screen.
  var videos = document.querySelectorAll('.paper__media video, .publication__media video');
  if (videos.length && 'IntersectionObserver' in window) {
    var videoObserver = new IntersectionObserver(function (observed) {
      observed.forEach(function (item) {
        if (item.isIntersecting) item.target.play().catch(function () {});
        else item.target.pause();
      });
    }, { threshold: 0.25 });
    videos.forEach(function (video) { videoObserver.observe(video); });
  }

  // Home hero: the GrUVi icosahedron, flat-shaded like the logo. It spins
  // slowly about its eye face and turns to look at the pointer.
  var heroMark = document.querySelector('[data-hero-mark]');
  if (heroMark && heroMark.getBoundingClientRect && document.createElement('canvas').getContext) {
    var canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    heroMark.insertBefore(canvas, heroMark.firstChild);
    var ctx = canvas.getContext('2d');

    var phi = (1 + Math.sqrt(5)) / 2;
    var verts = [];
    [-1, 1].forEach(function (a) {
      [-1, 1].forEach(function (b) {
        verts.push([0, a, b * phi], [a, b * phi, 0], [b * phi, 0, a]);
      });
    });
    verts = verts.map(function (v) {
      var l = Math.hypot(v[0], v[1], v[2]);
      return [v[0] / l, v[1] / l, v[2] / l];
    });
    var edgeLength = Infinity;
    verts.forEach(function (p, i) {
      verts.forEach(function (q, j) {
        if (i < j) edgeLength = Math.min(edgeLength, Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]));
      });
    });
    var edge = edgeLength;
    function near(i, j) {
      var p = verts[i], q = verts[j];
      return Math.abs(Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]) - edge) < 1e-6;
    }
    var faces = [];
    for (var i = 0; i < 12; i++) for (var j = i + 1; j < 12; j++) for (var k = j + 1; k < 12; k++) {
      if (near(i, j) && near(j, k) && near(i, k)) faces.push([i, j, k]);
    }
    function centroid(f) {
      return [0, 1, 2].map(function (axis) { return (verts[f[0]][axis] + verts[f[1]][axis] + verts[f[2]][axis]) / 3; });
    }
    function normalize(v) { var l = Math.hypot(v[0], v[1], v[2]); return [v[0] / l, v[1] / l, v[2] / l]; }
    function cross(a, b) { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }
    function dot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
    function mul(m, v) {
      return [m[0] * v[0] + m[1] * v[1] + m[2] * v[2], m[3] * v[0] + m[4] * v[1] + m[5] * v[2], m[6] * v[0] + m[7] * v[1] + m[8] * v[2]];
    }
    function matmul(a, b) {
      var r = [];
      for (var row = 0; row < 3; row++) for (var col = 0; col < 3; col++) {
        r.push(a[row * 3] * b[col] + a[row * 3 + 1] * b[3 + col] + a[row * 3 + 2] * b[6 + col]);
      }
      return r;
    }
    function axisAngle(axis, angle) {
      var x = axis[0], y = axis[1], z = axis[2], c = Math.cos(angle), s = Math.sin(angle), t = 1 - c;
      return [t * x * x + c, t * x * y - s * z, t * x * z + s * y,
              t * x * y + s * z, t * y * y + c, t * y * z - s * x,
              t * x * z - s * y, t * y * z + s * x, t * z * z + c];
    }

    // Rotate the eye face so it looks straight at the viewer (+z).
    var eyeFace = faces[0];
    var eyeNormal = normalize(centroid(eyeFace));
    var toViewer = cross(eyeNormal, [0, 0, 1]);
    var base = axisAngle(normalize(toViewer), Math.acos(Math.max(-1, Math.min(1, eyeNormal[2]))));
    var eyeU = normalize([verts[eyeFace[0]][0] - centroid(eyeFace)[0], verts[eyeFace[0]][1] - centroid(eyeFace)[1], verts[eyeFace[0]][2] - centroid(eyeFace)[2]]);
    var eyeV = cross(eyeNormal, eyeU);

    var light = normalize([-0.55, 0.75, 1]);
    var dark = [10, 26, 56], bright = [190, 226, 255];
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var pointer = { x: -0.45, y: -0.4 }, look = { x: -0.45, y: -0.4 };
    var size = 0, dpr = 1, running = false, start = performance.now();

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      size = heroMark.clientWidth;
      canvas.width = Math.round(size * dpr);
      canvas.height = Math.round(size * dpr);
    }

    function draw(now) {
      var t = reduceMotion ? 0 : (now - start) / 1000;
      look.x += (pointer.x - look.x) * 0.06;
      look.y += (pointer.y - look.y) * 0.06;
      var spin = axisAngle(eyeNormal, t * 0.18);
      var tilt = matmul(axisAngle([0, 1, 0], look.x * 0.65 + Math.sin(t * 0.5) * 0.05),
                        axisAngle([1, 0, 0], look.y * 0.5 + Math.cos(t * 0.4) * 0.04));
      var m = matmul(tilt, matmul(base, spin));
      var scale = size * 0.43 * dpr, cx = canvas.width / 2, cy = canvas.height / 2, camera = 5;

      function project(p) {
        var q = mul(m, p);
        var f = camera / (camera - q[2]);
        return [cx + q[0] * scale * f, cy - q[1] * scale * f];
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineJoin = 'round';
      ctx.lineWidth = 2.4 * dpr;
      ctx.strokeStyle = '#060a13';
      // Cull against the actual (perspective) view ray and paint back to front,
      // so faces near the silhouette never flicker or overdraw nearer ones.
      var visible = [];
      faces.forEach(function (f) {
        var c = mul(m, centroid(f));
        var n = normalize(c);
        if (dot(n, [-c[0], -c[1], camera - c[2]]) <= 0) return;
        visible.push({ face: f, normal: n, depth: c[2] });
      });
      visible.sort(function (a, b) { return a.depth - b.depth; });
      visible.forEach(function (item) {
        var f = item.face, n = item.normal;
        var b = Math.pow(Math.max(0, dot(n, light)), 1.8);
        var rgb = dark.map(function (d, c) { return Math.round(d + (bright[c] - d) * b); });
        ctx.beginPath();
        f.forEach(function (index, step) {
          var p = project(verts[index]);
          if (step) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]);
        });
        ctx.closePath();
        ctx.fillStyle = 'rgb(' + rgb.join(',') + ')';
        ctx.fill();
        ctx.stroke();
      });

      // Eye: circles drawn in the plane of the eye face, so they foreshorten with it.
      var c0 = centroid(eyeFace);
      function disc(radius, du, dv) {
        ctx.beginPath();
        for (var s = 0; s <= 40; s++) {
          var a = s / 40 * Math.PI * 2;
          var u = Math.cos(a) * radius + du, v = Math.sin(a) * radius + dv;
          var p = project([c0[0] + eyeU[0] * u + eyeV[0] * v, c0[1] + eyeU[1] * u + eyeV[1] * v, c0[2] + eyeU[2] * u + eyeV[2] * v]);
          if (s) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]);
        }
        ctx.closePath();
        ctx.fill();
      }
      // Pupil and glint offsets are chosen in screen space, then expressed in the
      // eye face's own axes, so they stay put while the solid spins.
      var inv = [m[0], m[3], m[6], m[1], m[4], m[7], m[2], m[5], m[8]];
      function faceOffset(screen, amount) {
        var v = mul(inv, screen);
        return [Math.max(-1, Math.min(1, dot(v, eyeU))) * amount, Math.max(-1, Math.min(1, dot(v, eyeV))) * amount];
      }
      var gaze = faceOffset([pointer.x, -pointer.y, 0], 0.065);
      var glint = faceOffset([0.7, 0.7, 0], 0.04);
      ctx.fillStyle = '#ffffff'; disc(0.2, 0, 0);
      ctx.fillStyle = '#0a1a33'; disc(0.11, gaze[0], gaze[1]);
      ctx.fillStyle = 'rgba(255,255,255,.95)'; disc(0.035, gaze[0] + glint[0], gaze[1] + glint[1]);

      if (running && !reduceMotion) requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', function () { resize(); if (!running) draw(performance.now()); });
    window.addEventListener('pointermove', function (event) {
      var rect = canvas.getBoundingClientRect();
      pointer.x = Math.max(-1, Math.min(1, (event.clientX - (rect.left + rect.width / 2)) / (window.innerWidth / 2)));
      pointer.y = Math.max(-1, Math.min(1, (event.clientY - (rect.top + rect.height / 2)) / (window.innerHeight / 2)));
      if (reduceMotion) { look.x = pointer.x; look.y = pointer.y; draw(performance.now()); }
    }, { passive: true });

    if ('IntersectionObserver' in window && !reduceMotion) {
      new IntersectionObserver(function (observed) {
        var visible = observed[0].isIntersecting;
        if (visible && !running) { running = true; requestAnimationFrame(draw); }
        running = visible;
      }).observe(canvas);
    }
    draw(performance.now());
  }

  if (window.location.hash) {
    var target = document.getElementById(window.location.hash.slice(1));
    if (target && target.tagName.toLowerCase() === 'details') target.open = true;
  }

  document.querySelectorAll('[data-news-content]').forEach(function (content) {
    content.innerHTML = '<p>' + content.getAttribute('data-news-content') + '</p>';
  });
}());
