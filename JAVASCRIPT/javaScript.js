window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: false,
        theme: "light2",
        // title:{
        //     text: "Simple Line Chart"
        // },
        axisY:{
            includeZero: false
        },
        data: [{        
            type: "line",       
            dataPoints: [
                { y: 450 },
                { y: 414},
                { y: 520, indexLabel: "highest",markerColor: "red", markerType: "triangle" },
                { y: 460 },
                { y: 450 },
                { y: 500 },
                { y: 480 },
                { y: 480 },
                { y: 410 , indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
                { y: 500 },
                { y: 480 },
                { y: 510 }
            ]
        }]
    });
    
    
    

   

        var chart1 = new CanvasJS.Chart("schartContainer", {
            animationEnabled: false,
            theme: "light1", // "light1", "light2", "dark1", "dark2"
            title:{
                text:"The current chart",
                
            },
          
            data: [{        
                type: "column",  
                showInLegend: false, 
                legendMarkerColor: "grey",
                // legendText: "MMbbl = one million barrels",
                dataPoints: [      
                    { y: 266455, label: "Mon" },
                    { y:  300878,  label: "Tue" },
                    { y: 169709,  label: "Wed" },
                    { y: 266455,  label: "Thu" },
                    { y: 97800,  label: "Fri" },
                    { y: 101500, label: "Sat" },
                    { y:  142503,  label: "Sun" },
                  
                ]
            }]
        });
        chart1.render();
        chart.render();
        
        }
