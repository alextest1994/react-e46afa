import React, { useState, useRef } from 'react';
import { render } from 'react-dom';
import HighchartsReact from 'highcharts-react-official';
import highchartsExporting from 'highcharts/modules/exporting';

import Highcharts from 'highcharts';

import RadioGroup from './second';
highchartsExporting(Highcharts);

const LineChart = () => {
  const chart = useRef();

  const [chartOptions, setChartOptions] = useState({
    xAxis: {
      categories: ['A', 'B', 'C'],
    },
    series: [{ data: [1, 2, 3] }],
  });

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
      <RadioGroup
        ref={chart}
        highcharts={Highcharts}
        options={chartOptions}
      ></RadioGroup>
    </div>
  );
};

render(<LineChart />, document.getElementById('root'));
