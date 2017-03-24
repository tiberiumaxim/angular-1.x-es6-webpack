import angular from 'angular';

class API {
	constructor($http) {
		this.$http = $http;
	}

	getPlayer(playerId) {
		return this.$http.get(`/assets/data/${playerId}.json`, { cache: true }).then(function (response) {
			return response.data;
		});
	}
}

API.$inject = ['$http'];

export default angular.module('app.services', [])
	.service('API', API)
	.name;
