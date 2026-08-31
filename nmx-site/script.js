document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '×' : '☰';
    });
  }

  var form = document.getElementById('booking-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('b-name').value.trim();
      var email = document.getElementById('b-email').value.trim();
      var project = document.getElementById('b-project').value;
      var date = document.getElementById('b-date').value;
      var details = document.getElementById('b-details').value.trim();

      var subject = 'New enquiry: ' + project + ' — ' + name;
      var body =
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Project type: ' + project + '\n' +
        'Preferred date: ' + (date || 'Flexible') + '\n\n' +
        'Details:\n' + details;

      var mailto = 'mailto:nmx.mediaexchange@gmail.com?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

      var confirmBox = document.getElementById('booking-confirm');
      window.location.href = mailto;
      if (confirmBox) {
        confirmBox.hidden = false;
        confirmBox.textContent = 'Opening your email app with this filled in — send it and we\'ll reply within two business days.';
      }
    });
  }
});
