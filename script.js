var ctx = document.getElementById('voedselVoorraadChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Pizza', 'Soep', 'Bonenmix', 'Havermout'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [40, 25, 10, 25]
        }]
    },

    // Configuration options go here
    options: {}
});





// var voedselvoorraadChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: data,
//     options: {
//         legend: {
//             display: false
//         }
//     }
// });





// link naar code: https://jsfiddle.net/cmyker/ooxdL2vj/

// var data = {
//     labels: [
//       "Red",
//       "Blue",
//       "Yellow"
//     ],
//     datasets: [
//       {
//         data: [40, 20, 40],
//         backgroundColor: [
//           "#FF6384",
//           "#36A2EB",
//           "#FFCE56"
//         ],
//         hoverBackgroundColor: [
//           "#FF6200",
//           "#36A2EB",
//           "#FFCE56"
//         ]
//       }]
//   };
  
//   var promisedDeliveryChart = new Chart(document.getElementById('voedselVoorraadChart'), {
//     type: 'doughnut',
//     data: data,
//     options: {
//         responsive: true,
//       legend: {
//         display: false
//       }
//     }
//   });
  
//   Chart.pluginService.register({
//     beforeDraw: function(chart) {
//       var width = chart.chart.width,
//           height = chart.chart.height,
//           ctx = chart.chart.ctx;
  
//       ctx.restore();
//       var fontSize = (height / 114).toFixed(2);
//       ctx.font = fontSize + "em sans-serif";
//       ctx.textBaseline = "middle";
  
//       var text = "3500",
//           textX = Math.round((width - ctx.measureText(text).width) / 2),
//           textY = height / 2;
  
//       ctx.fillText(text, textX, textY);
//       ctx.save();
//     }
//   });





  var ctx2 = document.getElementById('aantalMensenChart').getContext('2d');
var chart2 = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Pizza', 'Soep', 'Bonenmix', 'Havermout'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [40, 25, 10, 25]
        }]
    },

    // Configuration options go here
    options: {}
});