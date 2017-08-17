angular.module('wdinstagram')
.controller('EntryIndexController', [
  'Entry',
  EntryIndexController
])

function EntryIndexController (Entry) {
    this.entries = Entry.query()
  }
