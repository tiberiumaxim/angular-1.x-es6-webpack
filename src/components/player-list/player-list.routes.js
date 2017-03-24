routes.inject = ['$stateProvider'];

export default function routes($stateProvider) {
	$stateProvider
		.state({
			name: 'player-list',
			url: '/player-list',
			template: require('./player-list.html'),
			controller: 'PlayerListController',
			controllerAs: 'playerList'
		});
}