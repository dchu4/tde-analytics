(function() {
  "use strict";

  angular.module("app").controller("visitsCtrl",['$scope','$http',function($scope, $http){

    Chart.defaults.global.defaultColor = '#F05A28';
    Chart.defaults.global.elements.responsive = true;

    var colorArray = ['#FF9999', '#EE4036', '#E3F14F', '#F05A28', '#186CBB', '#A11C14', '#1D61A1', '#FF9999', '#EE4036', '#E3F14F', '#F05A28', '#186CBB', '#A11C14', '#1D61A1']

    $scope.visitsSetup = function(){
      $http.get('api/v1/charts.json').then(function(result) {
        var monthTimelineChartData = {
          labels: result.data["product_visit_dates"],
          datasets: [
            {
              label: 'Number of Visits',
              data: result.data["product_visit_counts"],
              backgroundColor: '#FF9999',
              borderColor: '#FF9999',
              borderWidth: 2,
              fill: false
            },
            {
              label: 'Number of Purchases',
              data: result.data["month_product_purchases"],
              backgroundColor: '#EE4036',
              borderColor: '#EE4036',
              borderWidth: 2,
              fill: false
            }
          ]
        };
        var mtc = document.getElementById("month_timeline_chart");
        var monthTimelineChart = new Chart(mtc, {
          type: 'line',
          data: monthTimelineChartData,
          options: { 
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }],
              xAxes: [{
                gridLines: {
                  display: false
                }
              }]
            }
          }
        });
      })
    }

    window.scope = $scope;
  }])
}());