document.addEventListener('DOMContentLoaded', function () {
  var list = document.getElementById('roster-list');
  if (!list) return;

  PORTFOLIOS.forEach(function (creator, i) {
    var row = document.createElement('div');
    row.className = 'creator';
    if (i === 0) row.style.borderTop = 'none';

    var photo = document.createElement('div');
    photo.className = 'photo';
    var thumb = creator.gallery && creator.gallery[0];
    if (thumb) {
      var img = document.createElement('img');
      img.src = thumb;
      img.alt = creator.name;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      img.onerror = function () {
        photo.innerHTML = creator.handle + '<br>photo goes here';
      };
      photo.appendChild(img);
    } else {
      photo.textContent = creator.handle;
    }

    var info = document.createElement('div');
    var handle = document.createElement('span');
    handle.className = 'handle';
    handle.textContent = creator.name + ' — ' + creator.handle;

    var role = document.createElement('h3');
    role.style.marginTop = '6px';
    role.textContent = creator.role;

    var tagline = document.createElement('p');
    tagline.textContent = creator.tagline;

    var services = document.createElement('div');
    services.className = 'services';
    creator.services.forEach(function (s) {
      var span = document.createElement('span');
      span.textContent = s;
      services.appendChild(span);
    });

    var link = document.createElement('a');
    link.href = 'portfolio.html?slug=' + encodeURIComponent(creator.slug);
    link.className = 'btn btn-outline';
    link.style.marginTop = '18px';
    link.textContent = 'View full portfolio';

    info.appendChild(handle);
    info.appendChild(role);
    info.appendChild(tagline);
    info.appendChild(services);
    info.appendChild(link);

    row.appendChild(photo);
    row.appendChild(info);
    list.appendChild(row);
  });
});
