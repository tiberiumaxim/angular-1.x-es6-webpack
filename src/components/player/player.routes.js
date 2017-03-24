routes.inject = ['$stateProvider'];

export default function routes($stateProvider) {
	$stateProvider.state({
		name: 'player',
		url: '/player/{playerId}',
		template: require('./player.html'),
		controller: 'PlayerController',
		controllerAs: 'player',
		resolve: {
			player: (API, $stateParams) => {
				return API.getPlayer($stateParams.playerId);
			}
		}
	});
}