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
        var chart2 = new CanvasJS.Chart("chartContainer1", {
            animationEnabled: false,
        
            data: [{
                type: "spline",
                name: "speed",
            legendMarkerColor:"red",
                dataPoints: [
                    { x: 0 , y: 0 },
                    { x: 11 , y: 8.2 },
                    { x: 47 , y: 41.7 },
                    { x: 56 , y: 16.7 },
                    { x: 120 , y: 31.3 },
                    { x: 131 , y: 18.2 },
                    { x: 171 , y: 31.3 },
                    { x: 189 , y: 61.1 },
                    { x: 221 , y: 40.6 },
                    { x: 232 , y: 18.2 },
                    { x: 249 , y: 35.3 },
                    { x: 253 , y: 12.5 },
                    { x: 264 , y: 16.4 },
                    { x: 280 , y: 37.5 },
                    { x: 303 , y: 24.3 },
                    { x: 346 , y: 23.3 },
                    { x: 376 , y: 11.3 },
                    { x: 388 , y: 8.3 },
                    { x: 430 , y: 1.9 },
                    { x: 451 , y: 4.8 }
                ]
            },
            {
                type: "spline",  
                axisYType: "secondary",
            
                dataPoints: [
                    { x: 0 , y: 0 },
                    { x: 11 , y: 90 },
                    { x: 47 , y: 1090 },
                    { x: 56 , y: 1240 },
                    { x: 120 , y: 1500 },
                    { x: 131 , y: 1000 },
                    { x: 171 , y: 2190 },
                    { x: 189 , y: 2290 },
                    { x: 221 , y: 1090 },
                    { x: 232 , y: 790 },
                    { x: 249 , y: 390 },
                    { x: 260 , y: 240 },
                    { x: 264 , y: 620 },
                    { x: 280 , y: 1220 },
                    { x: 303 , y: 780 },
                    { x: 346 , y: 780 },
                    { x: 376 , y: 120 },
                    { x: 388 , y: 220 },
                    { x: 430 , y: 100 },
                    { x: 451 , y: 400 }
                ]
            }]
        });
       
        chart1.render();
        chart2.render();
        chart.render();
        
        }
