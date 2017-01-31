(function() {
  "use strict";

  angular.module("app").controller("usersCtrl",['$scope','$http',function($scope, $http){

    Chart.defaults.global.defaultColor = '#F05A28';
    Chart.defaults.global.elements.responsive = true;

    var colorArray = ['#FF9999', '#EE4036', '#E3F14F', '#F05A28', '#186CBB', '#A11C14', '#1D61A1', '#FF9999', '#EE4036', '#E3F14F', '#F05A28', '#186CBB', '#A11C14', '#1D61A1']

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