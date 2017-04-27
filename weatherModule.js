var app = angular.module("forecastModule", []);
app.controller('weatherCtrl', function($scope,  $http) {
	
	// $scope.cityName = '';
     $scope.search = function (cityName) {
     	console.log(cityName);
     // $http.get('http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b1b15e88fa797225412429c1c50c122a1')
    $http.get('http://openweathermap.org/data/2.5/find?q='+cityName+'&type=like&sort=population&cnt=30&appid=b1b15e88fa797225412429c1c50c122a1')
   // $http.get('http://samples.openweathermap.org/data/2.5/weather?q="+ Delhi +"&appid=b1b15e88fa797225412429c1c50c122a1')
  		.then(function(response) {
      		$scope.value = response.data;
  });
  	}
});
