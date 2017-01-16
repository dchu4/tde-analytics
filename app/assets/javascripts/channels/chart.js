App.room = App.cable.subscriptions.create("ChartChannel", {
  connected: function(){},
  
  disconnected: function(){},

  received: function(){

    $.getJSON('/api/v1/charts' + window.location.pathname, function(dataResults) {
      // console.log(dataResults);
      // myChart.data.datasets[0].data = dataResults;
      // myChart.update();
      switch(window.location.pathname) {
        case '/':

            // Quick stats update
            var visitCount = document.getElementsByClassName("visit_count");
            visitCount[0].innerHTML = dataResults["site_visits"];
            visitCount[1].innerHTML = dataResults["site_visits"];

            var userCount = document.getElementsByClassName("user_count");
            userCount[0].innerHTML = dataResults["user_count"];
            userCount[1].innerHTML = dataResults["user_count"];

            var mostFrequentOS = document.getElementsByClassName("most_frequent_os");
            mostFrequentOS[0].innerHTML = dataResults["most_frequent_os"];
            mostFrequentOS[1].innerHTML = dataResults["most_frequent_os"];

            var mostFrequentModel = document.getElementsByClassName("most_frequent_model");
            mostFrequentModel[0].innerHTML = dataResults["most_frequent_model"];
            mostFrequentModel[1].innerHTML = dataResults["most_frequent_model"];

            var mostViewedProduct = document.getElementsByClassName("most_viewed_product");
            mostViewedProduct[0].innerHTML = dataResults["most_viewed_product"];
            mostViewedProduct[1].innerHTML = dataResults["most_viewed_product"];

            var commonUserCity = document.getElementsByClassName("common_user_city");
            commonUserCity[0].innerHTML = dataResults["common_user_city"];
            commonUserCity[1].innerHTML = dataResults["common_user_city"];

            // Chart updates
            visitsTimelineChart.data.label = dataResults["dates"];
            visitsTimelineChart.data.datasets[0].data = dataResults["numbers"];

            countries_chart.data.label = dataResults["countries"];
            countries_chart.data.datasets[0].data = dataResults["visits"];

            visitsTimelineChart.update();
            countries_chart.update();
            break;
        default:
            break;
      }
    });

  }

});