angular
.module('wdinstagram')
.controller('EntryEditController', [
  '$state',
  'Entry',
  EntryEditController
])

  function EntryEditController($state, Entry) {
    this.entry = Entry.get({id: $state.params.id})
    this.update = function () {
      this.entry.$update({id: $state.params.id}).then(() => {
        $state.go('entryIndex', {}, {reload: true})
      })
    }
    this.destroy = function () {
      this.entry.$delete({id: $state.params.id}).then(() => {
        $state.go('entryIndex', {}, {reload: true})
      })
    }
  }
