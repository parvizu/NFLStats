
Template.gameItem.events({
	'click span.datafile': function(event) {
		var gameId = $(event.target).attr('gameid');
		var gameUrl = "http://www.nfl.com/liveupdate/game-center/"+gameId+"/"+gameId+"_gtd.json"
		console.log(gameUrl);

		$.ajax({
			url: gameUrl,
		    type: 'POST',
		    success: function (data) {
		      console.log(data);
		    },
		    error: function(){
		      console.log("Cannot get data from " + gameUrl);
		    }
		});
	}
});

