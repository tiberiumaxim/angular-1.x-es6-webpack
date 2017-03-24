require('./assets/style/main.scss');

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './app.config';

import PlayerList from './components/player-list';
import Player from './components/player';

export default angular.module('app', [uiRouter, Player, PlayerList])
	.config(routing);
