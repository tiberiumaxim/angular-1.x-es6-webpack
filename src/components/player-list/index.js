import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './player-list.routes';
import PlayerListController from './player-list.controller';

export default angular.module('app.playerList', [uirouter])
	.config(routing)
	.controller('PlayerListController', PlayerListController)
	.name;