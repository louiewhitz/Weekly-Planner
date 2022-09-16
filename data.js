/* exported data */

var data = {
  view: 'add-entry-page',
  entryId: 1,
  updateEntry: null,
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  currentDay: null
};

var previousDataJSON = localStorage.getItem('Calendar Entry');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('Calendar Entry', dataJSON);
});
