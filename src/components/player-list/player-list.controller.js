import angular from 'angular';

export default class PlayerListController {
	constructor($http) {
		const self = this;

		$http.get('/assets/data/players.json').then((response) => {
			if (response.status === 200) {
				self.players = response.data;
			} else {
				console.log('http issue', response);
			}
		});
	}

	getPlayerImage(playerId) {
		return require(`./../../assets/images/${playerId}.png`);
	}
}

PlayerListController.$inject = ['$http'];