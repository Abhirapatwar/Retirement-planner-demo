const data = {
    labels: ["20"," ","5"," ","30"," ","35"," ","40"," ","60"," ","65"],
    datasets: [{
      label: 'Employer: K73,500',
      data: ['50', '60', '70', '80', '100', '120', '130', '160', '180', '200', '230', '260', '270'],
      backgroundColor: [
        'rgb(0, 0, 252)'
      ],
    },{
      label: 'Employee: K52,500',
      data: ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
      backgroundColor: [
        'rgb(0, 110, 253)',
      ],
    },{
      label: 'Total Intrest: K244,313',
      data: ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
      backgroundColor: [
        'rgb(0, 168, 253)',
      ],
    }]
  };

  // config 
  const config = {
    type: 'bar',
    data,
    options: {
        plugins:{
            legend:{
            //   lables:{
            //       usePointStyle: true,
            //       pointStyle: 'circle'
            //   }
            // display:false,
            }
        },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
          x:{
              stacked:true,
          },
        y: {
          stacked:true,
          beginAtZero: true
        }
      },
      
    }
  };

  // render init block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );