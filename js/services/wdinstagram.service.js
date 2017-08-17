angular
.module('wdinstagram')
.factory('Gram', [
  '$resource',
  gramService
])

function gramService ($resource) {
  return $resource('http://localhost:3000/entries/:id', {}, {
      update: {method: 'PUT'}
    })
}
