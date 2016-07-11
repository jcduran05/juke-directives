juke.directive('songsTable', function(PlaylistFactory, PlayerFactory){
	return {
		restrict: 'E',
		scope:{
			songs: '='
		},
		link: function(scope, element, attrs){
 		scope.addSong = function (song) {
    		return PlaylistFactory.addSong(scope.id, song)
    		.then(function (addedSong) {
     			scope.playlist.songs.push(addedSong);
      			return addedSong;
    			});
 		 	};
 		scope.toggle = function (song) {
    		if (song !== PlayerFactory.getCurrentSong()) {
      			PlayerFactory.start(song, scope.songs);
    		} else if ( PlayerFactory.isPlaying() ) {
      			PlayerFactory.pause();
    		} else {
     			 PlayerFactory.resume();
    			}
  			};
  		scope.getCurrentSong = function () {
    		return PlayerFactory.getCurrentSong();
  			};

  		scope.isPlaying = function (song) {
    		return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  			};
		},
		templateUrl: 'js/song/templates/song.template.html'
	}
})