$(document).ready(function() {

  $.getJSON('api/v1/charts', function(result) {
    // timeline chart
    var timelineChartData = {
      labels: result["dates"],
      datasets: [{
        label: 'Number of Visits',
        data: result["numbers"],
        backgroundColor: [
          'rgb(255, 99, 132)'
        ],
        borderColor: [
          'rgb(255, 99, 132)'
        ],
        borderWidth: 2,
        fill: false
      }]
    };
    var vtc = document.getElementById("visits_timeline_chart");
    var visitsTimelineChart = new Chart(vtc, {
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
        data: result["countries_visits"],
        backgroundColor: [
          'rgb(255, 99, 132)',
          '#4BB5CC',
          '#ffd777'
        ]
      }]
    };
    var cc = document.getElementById("countries_chart");
    var countriesChart = new Chart(cc, {
      type: 'pie',
      data: countryChartData
    });

    // products_chart
    var productsChartData = {
      labels: result["product_names"],
      datasets: [{
        label: 'Number of Views',
        data: result["visit_counts"],
        backgroundColor: [
          'rgb(255, 99, 132)',
          '#4BB5CC',
          '#ffd777'
        ]
      }]
    };
    var pc = document.getElementById("products_chart");
    var productsChart = new Chart(pc, {
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
        backgroundColor: [
          'rgb(255, 99, 132)',
          '#4BB5CC',
          '#ffd777'
        ]
      }]
    };
    var cic = document.getElementById("cities_chart");
    var countriesChart = new Chart(cic, {
      type: 'doughnut',
      data: cityChartData
    });


    // device os chart
    var osChartData = {
      labels: result["device_os_names"],
      datasets: [{
        label: 'Number of Users',
        data: result["device_oss"],
        backgroundColor: [
          'rgb(255, 99, 132)',
          '#4BB5CC',
          '#ffd777'
        ]
      }]
    };
    var osc = document.getElementById("device_os_chart");
    var deviceOsChart = new Chart(osc, {
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
        backgroundColor: [
          'rgb(255, 99, 132)',
          '#4BB5CC',
          '#ffd777'
        ]
      }]
    };
    var mc = document.getElementById("device_model_chart");
    var deviceModelChart = new Chart(mc, {
      type: 'pie',
      data: modelChartData
    });

  });
});