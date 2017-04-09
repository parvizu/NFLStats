if (Games.find().count() === 0) {

	console.log('Inserting default records to DB.');
	Games.insert({
		gameid: "2015102200",
		game: '2015.w7.g00',
		desc: "2015, W7, TNF: 49ers v Seahawks",
		url: "http://www.nfl.com/liveupdate/game-center/2015102200/2015102200_gtd.json"
	});

	Games.insert({
		gameid: "2015101810",
		game: "2015.w6.g10",
		desc: "2015, W6, 49ers v Ravens",
		url: "http://www.nfl.com/liveupdate/game-center/2015101810/2015101810_gtd.json"
	});

	Games.insert({
		gameid: "2015101111",
		game: "2015.w5.g11",		
		desc: "2015, W5, SNF: 49ers v Giants",
		url: "http://www.nfl.com/liveupdate/game-center/2015101111/2015101111_gtd.json"
	});

	Games.insert({
		gameid: "2015100409",
		game: "2015.w4.g09",
		desc: "2015, W4, 49ers v Packers",
		url: "http://www.nfl.com/liveupdate/game-center/2015100409/2015100409_gtd.json"
	});

	Games.insert({
		gameid: "2016102000",
		game: "2016.w6.g00",
		desc: "2016, W6, Bears v Packers",
		url: "http://www.nfl.com/liveupdate/game-center/2016102000/2016102000_gtd.json"
	});
	console.log('Initial Dev DB ready!');
}