(function() {
  "use strict";

  angular.module("app").controller("locationCtrl",function($scope, $http){
    var worldChart;
    var newStates;
    var newCities;

    $scope.locationChartSetup = function(){

      google.charts.load('upcoming', {'packages':['geochart']});

      google.charts.setOnLoadCallback(drawMaps);

      function drawMaps() {

        $http.get('/api/v1/location_charts.json').then(function(json) {
          //world map
          console.log(json.data);
          var worldData = new google.visualization.arrayToDataTable(json.data["world_chart"]);

          var worldOptions = {
            colorAxis: {
              colors: ['#FF9999', '#EE4036']
            }
          };

          worldChart = new google.visualization.GeoChart(document.getElementById('world_chart'));
          worldChart.draw(worldData, worldOptions);

          //top states table
          newStates = json.data["states"];
          var statesTblBody = document.getElementById('top_states');

          for (var i = 0; i < newStates.length; i++) {
            var row = document.createElement("tr");

            var cell = document.createElement("td");
            var cell2 = document.createElement("td");

            var cellText = document.createTextNode(newStates[i][0]);
            var cellText2 = document.createTextNode(newStates[i][1]);

            cell.appendChild(cellText);
            cell2.appendChild(cellText2);

            row.appendChild(cell);
            row.appendChild(cell2);

            statesTblBody.appendChild(row);
          };

          //top cities table
          newCities = json.data["cities"];
          var citiesTblBody = document.getElementById('top_cities');

          for (var j = 0; j < newCities.length; j++) {
            var row = document.createElement("tr");

            var cell = document.createElement("td");
            var cell2 = document.createElement("td");

            var cellText = document.createTextNode(newCities[j][0]);
            var cellText2 = document.createTextNode(newCities[j][1]);

            cell.appendChild(cellText);
            cell2.appendChild(cellText2);

            row.appendChild(cell);
            row.appendChild(cell2);

            citiesTblBody.appendChild(row);
          };

        });

      };

    };
    window.scope = $scope;
  });

}());