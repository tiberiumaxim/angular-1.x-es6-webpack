import angular from 'angular';
import uirouter from 'angular-ui-router';

export default class PlayerController {
	constructor() {
	}

	getPlayerImage(playerId) {
		return require(`./../../assets/images/${playerId}.png`);
	}
}