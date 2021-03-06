document.addEventListener('DOMContentLoaded', () => {
	let haikuDiv = document.getElementById('haiku_div');
	let haiku = 'Den ';
	let haikuArray = [
		[
			'gamla',
			'lilla',
			'stora',
			'unga',
			'blå',
			'varma',
			'kalla',
			'röda',
			'strävande',
			'friska',
			'glada',
			'sorgsna',
			'avlägsna',
		],
		[
			'ängen,<br>',
			'sjön,<br>',
			'dammen,<br>',
			'anden,<br>',
			'kroppen,<br>',
			'floden,<br>',
			'toppen<br>',
			'stranden,<br>',
			'bäcken,<br>',
		],
		[
			'en pojke',
			'en flicka',
			'en man',
			'en kvinna',
			'en gumma',
			'ett barn',
			'ett rådjur',
			'ett väsen',
			'en drake',
			'en evighet',
			'en apa',
			'en fisk',
			'en krigare',
			'en tanke',
		],
		[
			'hoppar',
			'går',
			'skuttar',
			'sitter',
			'glider',
			'flyger',
			'svävar',
			'kryper',
			'springer',
		],
		[
			'i,<br>',
			'ur,<br>',
			'upp,<br>',
			'ned,<br>',
			'bort,<br>',
			'bortom,<br>',
			'bredvid,<br>',
			'nedanför,<br>',
			'på,<br>',
		],
		[
			'ljudet av',
			'doften av',
			'synen av',
			'förnimmelsen av',
			'känslan av',
			'tanken på',
			'längtan efter',
			'avsaknaden av',
			'vördnaden inför',
			'fruktan inför',
			'bävan inför',
		],
		[
			'tiden.',
			'vatten.',
			'snö.',
			'gräs.',
			'jord.',
			'himmelen.',
			'träd.',
			'det förgågna.',
			'historien.',
		],
	];

	for (let word of haikuArray) {
		haiku += word[Math.floor(Math.random() * word.length)] + ' ';
	}

	haikuDiv.innerHTML = haiku;
});
