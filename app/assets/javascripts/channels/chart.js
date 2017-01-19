App.room = App.cable.subscriptions.create("ChartChannel", {
  connected: function(){},
  
  disconnected: function(){},

  received: function(){

    $.getJSON('/api/v1/charts' + window.location.pathname, function(dataResults) {
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

            countriesChart.data.label = dataResults["countries"];
            countriesChart.data.datasets[0].data = dataResults["country_visits"];

            productsChart.data.label = dataResults["product_names"];
            productsChart.data.datasets[0].data = dataResults["visit_counts"];

            citiesChart.data.label = dataResults["cities"];
            citiesChart.data.datasets[0].data = dataResults["city_visits"];

            deviceOsChart.data.label = dataResults["device_names"];
            deviceOsChart.data.datasets[0].data = dataResults["device_oss"];

            deviceModelChart.data.label = dataResults["device_model_names"];
            deviceModelChart.data.datasets[0].data = dataResults["device_models"];

            visitsTimelineChart.update();
            countriesChart.update();
            productsChart.update();
            citiesChart.update();
            deviceOsChart.update();
            deviceModelChart.update();
            break;
        case ('/product_charts/' + gon.product_id):
            
            break;
        default:
            break;
      }
    });

  }

});