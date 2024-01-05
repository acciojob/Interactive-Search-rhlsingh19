//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const searchDiv = document.querySelector('.search');
  const searchInput = document.querySelector('.input');
  const searchButton = document.querySelector('.btn');

  searchButton.addEventListener('click', function() {
    searchDiv.classList.add('active');
    searchInput.focus();
  });
});
