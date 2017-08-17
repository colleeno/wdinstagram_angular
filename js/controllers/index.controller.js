angular.module('wdinstagram')
.controller('GramIndexController', [
  'Gram',
  GramIndexController
])

function GramIndexController (Gram) {
    this.grams = Gram.query()
  }
