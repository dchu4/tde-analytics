(function() {
  "use strict";

  angular.module("app").controller("visitsCtrl",['$scope','$http',function($scope, $http){

    Chart.defaults.global.defaultColor = '#FF9999';
    Chart.defaults.global.elements.responsive = true;

    var colorArray = ['#66A5CC', '#FFFEB2', '#8ACC66', '#F8941D', '#FF7344', '#F7722C', '#F1857F', '#47B266', '#FFAE8C', '#FFB2B2', '#E880B4', '#FF5D53', '#66A5CC', '#FFFEB2', '#8ACC66', '#F8941D', '#FF7344', '#F7722C', '#F1857F', '#47B266', '#FFAE8C', '#FFB2B2', '#E880B4', '#FF5D53']

    var color1 = colorArray[Math.floor(Math.random()*colorArray.length)];
    var color2 = colorArray[Math.floor(Math.random()*colorArray.length)];

    $scope.visitsSetup = function(){
      $http.get('/api/v1/visits.json').then(function(result) {
        var monthTimelineChartData = {
          labels: result.data["product_visit_dates"],
          datasets: [
            {
              label: 'Number of Visits',
              data: result.data["product_visit_counts"],
              backgroundColor: color1,
              borderColor: color1,
              borderWidth: 2,
              fill: false
            },
            {
              label: 'Number of Purchases',
              data: result.data["month_product_purchases"],
              backgroundColor: color2,
              borderColor: color2,
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