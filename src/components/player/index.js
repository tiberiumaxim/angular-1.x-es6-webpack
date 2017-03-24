import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './player.routes';
import PlayerController from './player.controller';
import API from './../../api.service.js';

export default angular.module('app.player', [uiRouter, API])
	.config(routing)
	.controller('PlayerController', PlayerController)
	.name