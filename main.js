var $addEntry = document.querySelector('.addentry');
var $modal = document.getElementById('modalview');

$addEntry.addEventListener('click', function (event) {
  if (event.target.className === 'addentry') {
    $modal.classList.remove = 'hidden';
  }

});
