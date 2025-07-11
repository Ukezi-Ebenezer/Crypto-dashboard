const chart = document.querySelector("#chart").getContext('2d');

new Chart (chart, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April','May', 'June', 'July','August', 'September', 'October', 
'November', 'December' ],
        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 
                    61004],
                borderColor: "red",
                borderWidth: 2
            }, 

            {
                label: 'ETH',
                data: [3000, 43136, 50632, 68074, 47822, 47785, 13512, 19471, 38448, 18316, 
                    92115],
                borderColor: "orange",
                borderWidth: 2
            },

            {
                label: 'SOL',
                data: [2000, 13336, 40632, 98041, 57111, 29915, 12513, 29372, 49441, 18316, 
                    12115],
                borderColor: "blue",
                borderWidth: 2
            }
  
        ]
    },
    options: {
        responsive: true
    }
})