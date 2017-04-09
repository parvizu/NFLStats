Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() {
		return Meteor.subscribe('games'); 
	}
});

Router.route('/', {name: 'gamesList'});
Router.route('/game/:_gameid',{
	name: 'gamePage',
	data: function() {
		return Games.findOne(this.params._gameid);
	}
})