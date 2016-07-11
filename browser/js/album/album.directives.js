'use strict';

juke.directive('albumList', function() {
  return {
    restrict: 'E',
    scope: {
      albums: '='
    },
    templateUrl: '/js/album/templates/albumsD.html'
  }
});


juke.directive('artistAlbums', function() {
  return {
    restrict: 'E',
    scope: {
      albums: '='
    },
    templateUrl: '/js/album/templates/albumsD.html'
  }
});
