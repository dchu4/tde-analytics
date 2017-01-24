Chart.defaults.global.defaultColor = '#F05A28';
Chart.defaults.global.elements.responsive = true;

var colorArray = ['#FF9999', '#EE4036', '#E3F14F', '#F05A28', '#186CBB', '#A11C14', '#1D61A1', '#FF9999', '#EE4036', '#E3F14F', '#F05A28', '#186CBB', '#A11C14', '#1D61A1'];

var mac = document.getElementById("monthly_amount_chart");
new Chart(mac, {
  type: 'bar',
  data: {
    labels: gon.monthlyLabels,
    datasets: [{
      label: 'Total Purchase Amount',
      data: gon.monthlyAmount,
      backgroundColor: colorArray,
      borderWidth: 0
    }]
  },
  options: { 
    scales: {
      yAxes: [{
        ticks: {
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
})

var mqc = document.getElementById("monthly_quantity_chart");
new Chart(mqc, {
  type: 'bar',
  data: {
  labels: gon.monthlyLabels,
    datasets: [{
      label: 'Total Quantity Purchased',
      data: gon.monthlyQuantity,
      backgroundColor: colorArray,
      borderWidth: 0
    }]
  },
  options: { 
    scales: {
      yAxes: [{
        ticks: {
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
})

var bac = document.getElementById("biweekly_amount_chart");
new Chart(bac, {
  type: 'bar',
  data: {
    labels: gon.biweeklyLabels,
    datasets: [{
      label: 'Total Purchase Amount',
      data: gon.biweeklyAmount,
      backgroundColor: colorArray,
      borderWidth: 0
    }]
  },
  options: { 
    scales: {
      yAxes: [{
        ticks: {
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
})

var bqc = document.getElementById("biweekly_quantity_chart");
new Chart(bqc, {
  type: 'bar',
  data: {
  labels: gon.biweeklyLabels,
    datasets: [{
      label: 'Total Quantity Purchased',
      data: gon.biweeklyQuantity,
      backgroundColor: colorArray,
      borderWidth: 0
    }]
  },
  options: { 
    scales: {
      yAxes: [{
        ticks: {
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
})

var wac = document.getElementById("weekly_amount_chart");
new Chart(wac, {
  type: 'bar',
  data: {
    labels: gon.weeklyLabels,
    datasets: [{
      label: 'Total Purchase Amount',
      data: gon.weeklyAmount,
      backgroundColor: colorArray,
      borderWidth: 0
    }]
  },
  options: { 
    scales: {
      yAxes: [{
        ticks: {
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
})

var wqc = document.getElementById("weekly_quantity_chart");
new Chart(wqc, {
  type: 'bar',
  data: {
  labels: gon.weeklyLabels,
    datasets: [{
      label: 'Total Quantity Purchased',
      data: gon.weeklyQuantity,
      backgroundColor: colorArray,
      borderWidth: 0
    }]
  },
  options: { 
    scales: {
      yAxes: [{
        ticks: {
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
})

var yac = document.getElementById("yesterday_amount_chart");
new Chart(yac, {
  type: 'bar',
  data: {
    labels: gon.yesterdayLabels,
    datasets: [{
      label: 'Total Purchase Amount',
      data: gon.yesterdayAmount,
      backgroundColor: colorArray,
      borderWidth: 0
    }]
  },
  options: { 
    scales: {
      yAxes: [{
        ticks: {
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
})

var yqc = document.getElementById("yesterday_quantity_chart");
new Chart(yqc, {
  type: 'bar',
  data: {
  labels: gon.yesterdayLabels,
    datasets: [{
      label: 'Total Quantity Purchased',
      data: gon.yesterdayQuantity,
      backgroundColor: colorArray,
      borderWidth: 0
    }]
  },
  options: { 
    scales: {
      yAxes: [{
        ticks: {
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
})