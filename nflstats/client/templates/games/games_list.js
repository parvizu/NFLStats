var gamesData = [
	{
		game: "2015, W7, TNF: 49ers v Seahawks",
		url: "http://www.nfl.com/liveupdate/game-center/2015102200/2015102200_gtd.json"
	},
	{
		game: "2015, W6, 49ers v Ravens",
		url: "http://www.nfl.com/liveupdate/game-center/2015101810/2015101810_gtd.json"
	},
	{
		game: "2015, W5, SNF: 49ers v Giants",
		url: "http://www.nfl.com/liveupdate/game-center/2015101111/2015101111_gtd.json"
	},
	{
		game: "2015, W4, 49ers v Packers",
		url: "http://www.nfl.com/liveupdate/game-center/2015100409/2015100409_gtd.json"
	},
];

Template.gamesList.helpers({
	games: gamesData
});