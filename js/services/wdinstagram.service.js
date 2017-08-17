angular
.module('wdinstagram')
.factory('Entry', [
  '$resource',
  entryService
])

function entryService ($resource) {
  return $resource('http://localhost:3000/entries/:id', {}, {
      update: {method: 'PUT'}
    })
}
