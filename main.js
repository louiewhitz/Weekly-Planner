/* global data */

var modalContainer = document.querySelector('.modal-container');
var addButton = document.querySelector('#add-entry-button');
var $formAddEntry = document.querySelector('#modal-form');
var selectOptionDay = document.querySelector('#days-of-week');
var selectOptionTime = document.querySelector('#time-of-the-day');
var description = document.querySelector('#description');

// addEventListeners
addButton.addEventListener('click', showModal);
$formAddEntry.addEventListener('submit', handleEntrySubmit);
selectOptionDay.addEventListener('select', selectDay);

// addEventListener functions
function showModal(event) {
  if (event.target.className === 'addentry') {
    modalContainer.className = 'modal-container view';
  }
}

function handleEntrySubmit(event) {
  event.preventDefault();
  var entryId = data.entryId;
  data.entryId++;
  var currentEntry = {
    day: $formAddEntry.elements.Days.value,
    time: $formAddEntry.elements.Time.value,
    description: $formAddEntry.elements.description.value,
    entryId
  };
  console.log($formAddEntry.elements);
  console.log('currentEntry', currentEntry);
  console.dir($formAddEntry);

}

function selectDay(event) {
  var eachDay = document.querySelectorAll('option');
  for (var i = 0; i < eachDay.length; i++) {
    var day =
  }

  console.log(eachDay.value);
}
