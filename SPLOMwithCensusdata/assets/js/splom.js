Plotly.d3.csv('assets/data/censuszillrgnStAgg3.csv', function(err, rows){
    console.log(rows);
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key.replace('.',' ')]; });
    }

    colors = []
    for (i=0; i < unpack(rows, 'Region').length; i++) {
      if (unpack(rows, 'Region')[i] == "Northeast Region") {
        colors.push(0)
      } else if (unpack(rows, 'Region')[i] == "South Region") {
        colors.push(0.5)
      } else if (unpack(rows, 'Region')[i] == "Midwest Region") {
        colors.push(1)
      } else if (unpack(rows, 'Region')[i] == "West Region") {
        colors.push(1)
      }
    }

    var pl_colorscale=[
               [0.0, '#19d3f3'],
               [0.333, '#19d3f3'],
               [0.333, '#e763fa'],
               [0.666, '#e763fa'],
               [0.666, '#636efa'],
               [1, '#636efa']
    ]

    var axis = () => ({
      showline:false,
      zeroline:false,
      gridcolor:'#ffff',
      ticklen:4
    })

    var data = [{
      type: 'splom',
      dimensions: [
        {label:'Population', values:unpack(rows,'Population')},
        {label:'PerCapitaIncome', values:unpack(rows,'PerCapitaIncome')},
        {label:'PovertyRate', values:unpack(rows,'PovertyRate')},
        {label:'AvgPricePerSqFt', values:unpack(rows,'AvgPricePerSqFt')}
      ],
      text: unpack(rows, 'Region'),
      marker: {
        color: colors,
        colorscale:pl_colorscale,
        size: 7,
        line: {
          color: 'white',
          width: 0.5
        }
      }
    }]

    var layout = {
      title:'Census Zillow Data set',
      height: 800,
      width: 800,
      autosize: false,
      hovermode:'closest',
      dragmode:'select',
      plot_bgcolor:'rgba(240,240,240, 0.95)',
      xaxis:axis(),
      yaxis:axis(),
      xaxis2:axis(),
      xaxis3:axis(),
      xaxis4:axis(),
      yaxis2:axis(),
      yaxis3:axis(),
      yaxis4:axis()
    }

    Plotly.react('graph', data, layout)

});