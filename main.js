var modalContainer = document.querySelector('.modal-container');
var addButton = document.querySelector('#add-entry-button');
var $formAddEntry = document.querySelector('#modal-form');
var selectOptionDay = document.querySelector('#days-of-week');
var selectOptionTime = document.querySelector('#time-of-the-day');
var description = document.querySelector('#description');



// addEventListeners
addButton.addEventListener('click', showModal);
$formAddEntry.addEventListener('submit', handleEntrySubmit);






// addEventListener functions
function showModal(event) {
  if (event.target.className === 'addentry') {
    modalContainer.className = 'modal-container view';
  }
}

function handleEntrySubmit(event) {
  event.preventDefault();
  var currentEntry = {
    day: $formAddEntry.elements.Days.value,
    time: $formAddEntry.elements.Time.value,
    description: $formAddEntry.elements.description.value
    entryId: data.nextEntryId;
  };
  console.log($formAddEntry.elements);
  console.log('currentEntry', currentEntry);
  console.dir($formAddEntry);

}
