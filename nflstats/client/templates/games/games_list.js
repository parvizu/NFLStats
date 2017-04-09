Template.gamesList.helpers({
	allGames: function() {
		return Games.find();
	}
});