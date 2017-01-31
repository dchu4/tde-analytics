(function() {
  "use strict";

  angular.module("app").controller("locationsCtrl",['$scope','$http',function($scope, $http){
    var worldChart;

    Chart.defaults.global.defaultColor = '#F05A28';
    Chart.defaults.global.elements.responsive = true;

    var colorArray = ['#FF9999', '#EE4036', '#E3F14F', '#F05A28', '#186CBB', '#A11C14', '#1D61A1', '#FF9999', '#EE4036', '#E3F14F', '#F05A28', '#186CBB', '#A11C14', '#1D61A1']

    $scope.locationsSetup = function(){
      google.charts.load('upcoming', {'packages':['geochart']});

      google.charts.setOnLoadCallback(drawMaps);

      Chart.defaults.global.defaultColor = '#F05A28';
      Chart.defaults.global.elements.responsive = true;

      var colorArray = ['#FF9999', '#EE4036', '#E3F14F', '#F05A28', '#186CBB', '#A11C14', '#1D61A1', '#FF9999', '#EE4036', '#E3F14F', '#F05A28', '#186CBB', '#A11C14', '#1D61A1'];

      function drawMaps() {
        console.log(gon.countryPurchases);

        //realtime visits map
        $.getJSON('/api/v1/location_charts', function(json) {
          //world map
          var worldData = new google.visualization.arrayToDataTable(json["world_chart"]);

          var worldOptions = {
            colorAxis: {
              colors: ['#FF9999', '#EE4036']
            }
          };

          worldChart = new google.visualization.GeoChart(document.getElementById('world_chart'));
          worldChart.draw(worldData, worldOptions);
        })

        //non-realtime purchases map
        var purchaseData = new google.visualization.arrayToDataTable(gon.countryPurchases);

        var purchaseOptions = {
          colorAxis: {
            colors: ['#FF9999', '#EE4036']
          }
        };

        var purchaseChart = new google.visualization.GeoChart(document.getElementById('purchase_chart'));
        purchaseChart.draw(purchaseData, purchaseOptions);
      }

      var crc = document.getElementById("country_revenue_chart");
      new Chart(crc, {
        type: 'pie',
        data: {
          labels: gon.countryLabels,
          datasets: [{
            label: 'Total Revenue',
            data: gon.countryRevenue,
            backgroundColor: colorArray,
            borderWidth: 0
          }]
        },
        options: {
          legend: {
            display: true
          }
        }
      })
    }

    window.scope = $scope;
  }])
}());