var visitsTimelineChart;
var countriesChart;
var productsChart;
var citiesChart;
var deviceOsChart;
var deviceModelChart;

Chart.defaults.global.defaultColor = '#F05A28';
Chart.defaults.global.elements.responsive = true;

var colorArray = ['#FF9999', '#EE4036', '#E3F14F', '#F05A28', '#186CBB', '#A11C14', '#1D61A1']

$(document).ready(function() {

  $.getJSON('api/v1/charts', function(result) {
    // timeline chart
    var timelineChartData = {
      labels: result["dates"],
      datasets: [{
        label: 'Number of Visits',
        data: result["numbers"],
        backgroundColor: '#FF9999',
        borderColor: '#FF9999',
        borderWidth: 2,
        fill: false
      }]
    };
    var vtc = document.getElementById("visits_timeline_chart");
    visitsTimelineChart = new Chart(vtc, {
      type: 'line',
      data: timelineChartData,
      options: { 
        scales: {
          yAxes: [{
            ticks: {
              stepSize: 1,
              beginAtZero:true
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

    // countries chart
    var countryChartData = {
      labels: result["countries"],
      datasets: [{
        data: result["country_visits"],
        backgroundColor: colorArray
      }]
    };
    var cc = document.getElementById("countries_chart");
    countriesChart = new Chart(cc, {
      type: 'pie',
      data: countryChartData
    });

    // products_chart
    var productsChartData = {
      labels: result["product_names"],
      datasets: [{
        label: 'Number of Views',
        data: result["visit_counts"],
        backgroundColor: colorArray
      }]
    };
    var pc = document.getElementById("products_chart");
    productsChart = new Chart(pc, {
      type: 'bar',
      data: productsChartData,
      options:{ 
        scales: {
          yAxes: [{
            ticks: {
              stepSize: 1,
              beginAtZero:true
            }
          }]
        },
        legend: {
          display: false
        }
      }
    });

    // cities chart
    var cityChartData = {
      labels: result["cities"],
      datasets: [{
        data: result["city_visits"],
        backgroundColor: colorArray
      }]
    };
    var cic = document.getElementById("cities_chart");
    citiesChart = new Chart(cic, {
      type: 'doughnut',
      data: cityChartData
    });


    // device os chart
    var osChartData = {
      labels: result["device_os_names"],
      datasets: [{
        label: 'Number of Users',
        data: result["device_oss"],
        backgroundColor: colorArray
      }]
    };
    var osc = document.getElementById("device_os_chart");
    deviceOsChart = new Chart(osc, {
      type: 'bar',
      data: osChartData,
      options:{ 
        scales: {
          yAxes: [{
            ticks: {
              stepSize: 1,
              beginAtZero:true
            }
          }]
        },
        legend: {
          display: false
        }
      }
    });

    // device model chart
    var modelChartData = {
      labels: result["device_model_names"],
      datasets: [{
        data: result["device_models"],
        backgroundColor: colorArray
      }]
    };
    var mc = document.getElementById("device_model_chart");
    deviceModelChart = new Chart(mc, {
      type: 'pie',
      data: modelChartData
    });

  });
});