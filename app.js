var spotifyApp = angular.module('spotifyApp', []);

//$scope makes variable available for angular controller
spotifyApp.controller('SpotifyController', function ($scope) {
    $scope.message = "yo whats up";
    
    $scope.changeMessage = function () {
        $scope.message =  "Message changed!" ;
    }
    
    $scope.artists = [
    {name:"Radiohead", style:"Rock"},
    {name:"Enigma", style:"New-age"},
    {name:"Coldplay", style:"Pop rock"}
    ]
    
});
    