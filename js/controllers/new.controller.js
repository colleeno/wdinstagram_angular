angular.module('wdinstagram')
.controller('EntryNewController', [
  '$state',
  'Entry',
  EntryNewController
])

function EntryNewController ($state, Entry) {
  this.entry = new Entry()
  this.create = function () {
    this.entry.$save(() => {
      $state.go('entryIndex')
    })
  }
}
