import React, { useState, useRef, Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import highchartsExporting from 'highcharts/modules/exporting';
import Highcharts from 'highcharts';

const RadioGroup = () => {
  const chart = useRef();

  const [chartOptions, setChartOptions] = useState({
    xAxis: {
      categories: ['A', 'B', 'C'],
    },
    series: [{ data: [1, 2, 3] }],
  });

  {
    return (
      <div>
      <button
        onClick={() => {
          chart.current.chart.exportChart();
        }}
      >
        PNG
      </button>
            <HighchartsReact
            ref={chart}
            highcharts={Highcharts}
            options={chartOptions}
          />
          </div>
    );
  }
};
export default RadioGroup;
