angular
.module('wdinstagram')
.controller('GramShowController', [
  '$stateParams',
  'Gram',
  GramShowController
])

function GramShowController($stateParams, Gram) {
  this.gram = Gram.get({id: $stateParams.id})
}
