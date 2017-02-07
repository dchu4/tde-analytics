(function() {
  "use strict";

  angular.module("app").controller("productsCtrl",['$scope','$http',function($scope, $http){

    Chart.defaults.global.defaultColor = '#FF9999';
    Chart.defaults.global.elements.responsive = true;

    var colorArray = ['#66A5CC', '#FFFEB2', '#8ACC66', '#F8941D', '#FF7344', '#F7722C', '#F1857F', '#47B266', '#FFAE8C', '#FFB2B2', '#E880B4', '#FF5D53', '#66A5CC', '#FFFEB2', '#8ACC66', '#F8941D', '#FF7344', '#F7722C', '#F1857F', '#47B266', '#FFAE8C', '#FFB2B2', '#E880B4', '#FF5D53']

    var color1 = colorArray[Math.floor(Math.random()*colorArray.length)];
    var color2 = colorArray[Math.floor(Math.random()*colorArray.length)];

    $scope.productsSetup = function(){
      $http.get('/api/v1/products.json').then(function(result) {
        var visitPurchaseChartData = {
          labels: result.data["product_hash_names"],
          datasets: [
            {
              label: 'Number of Visits',
              data: result.data["product_visits"],
              backgroundColor: color1,
              borderColor: color1,
              borderWidth: 2,
              fill: false
            },
            {
              label: 'Number of Purchases',
              data: result.data["sorted_purchases"],
              backgroundColor: color2,
              borderColor: color2,
              borderWidth: 2,
              fill: false
            }
          ]
        };
        var vpc = document.getElementById("visit_purchase_chart");
        var visitPurchaseChart = new Chart(vpc, {
          type: 'bar',
          data: visitPurchaseChartData,
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
        })
      })
    }

    window.scope = $scope;
  }])
}());