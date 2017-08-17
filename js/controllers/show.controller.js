angular
.module('wdinstagram')
.controller('EntryShowController', [
  '$stateParams',
  'Entry',
  EntryShowController
])

function EntryShowController($stateParams, Entry) {
  this.entry = Entry.get({id: $stateParams.id})
}
