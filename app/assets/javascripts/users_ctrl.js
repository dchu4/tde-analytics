(function() {
  "use strict";

  angular.module("app").controller("usersCtrl",['$scope','$http',function($scope, $http){

    Chart.defaults.global.defaultColor = '#FF9999';
    Chart.defaults.global.elements.responsive = true;

    var colorArray = ['#66A5CC', '#FFFEB2', '#8ACC66', '#F8941D', '#FF7344', '#F7722C', '#F1857F', '#47B266', '#FFAE8C', '#FFB2B2', '#E880B4', '#FF5D53', '#66A5CC', '#FFFEB2', '#8ACC66', '#F8941D', '#FF7344', '#F7722C', '#F1857F', '#47B266', '#FFAE8C', '#FFB2B2', '#E880B4', '#FF5D53']

    $scope.usersSetup = function(){
      var ovd = document.getElementById("os_version_duration");
      new Chart(ovd, {
        type: 'bar',
        data: {
          labels: gon.osDataLabels,
          datasets: [{
            label: 'Average Duration (minutes)',
            data: gon.osVersionDur,
            backgroundColor: colorArray,
            borderWidth: 0
          }]
        }
      })

      var dvd = document.getElementById("device_type_duration");
      new Chart(dvd, {
        type: 'bar',
        data: {
          labels: gon.deviceDataLabels,
          datasets: [{
            label: 'Average Duration (minutes)',
            data: gon.deviceTypeDur,
            backgroundColor: colorArray,
            borderWidth: 0
          }]
        }
      })
    }

    window.scope = $scope;
  }])
}());