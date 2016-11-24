var spotifyApp = angular.module('spotifyApp', []);

//$scope makes variable available for angular controller
spotifyApp.controller('SpotifyController', function ($scope) {
    $scope.message = "yo whats up";
});
    