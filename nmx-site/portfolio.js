document.addEventListener('DOMContentLoaded', function () {
  var params = new URLSearchParams(window.location.search);
  var slug = params.get('slug');
  var creator = PORTFOLIOS.find(function (c) { return c.slug === slug; });

  var root = document.getElementById('portfolio-root');
  var notFound = document.getElementById('portfolio-not-found');

  if (!creator) {
    root.hidden = true;
    notFound.hidden = false;
    return;
  }

  document.title = creator.name + ' — NMX';
  document.getElementById('p-frame-tag').textContent = 'System: ' + creator.handle;
  document.getElementById('p-name').textContent = creator.name;
  document.getElementById('p-role').textContent = creator.role;
  document.getElementById('p-handle').textContent = creator.handle;
  document.getElementById('p-tagline').textContent = creator.tagline;
  document.getElementById('p-bio').textContent = creator.bio;

  var servicesEl = document.getElementById('p-services');
  creator.services.forEach(function (s) {
    var span = document.createElement('span');
    span.textContent = s;
    servicesEl.appendChild(span);
  });

  var socials = document.getElementById('p-socials');
  if (creator.instagram) {
    var ig = document.createElement('a');
    ig.href = creator.instagram;
    ig.target = '_blank';
    ig.rel = 'noopener';
    ig.className = 'btn btn-outline';
    ig.textContent = 'Instagram';
    socials.appendChild(ig);
  }
  if (creator.tiktok) {
    var tt = document.createElement('a');
    tt.href = creator.tiktok;
    tt.target = '_blank';
    tt.rel = 'noopener';
    tt.className = 'btn btn-outline';
    tt.textContent = 'TikTok';
    socials.appendChild(tt);
  }

  var bookLink = document.getElementById('p-book');
  bookLink.href = 'contact.html?for=' + encodeURIComponent(creator.name);

  var gallery = document.getElementById('p-gallery');
  creator.gallery.forEach(function (src, i) {
    var fig = document.createElement('div');
    fig.className = 'gallery-item';
    var img = document.createElement('img');
    img.src = src;
    img.alt = creator.name + ' work sample ' + (i + 1);
    img.loading = 'lazy';
    img.onerror = function () {
      fig.classList.add('gallery-placeholder');
      fig.textContent = 'Image ' + (i + 1);
      fig.removeChild(img);
    };
    fig.appendChild(img);
    gallery.appendChild(fig);
  });
});
