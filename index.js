import React, { useState, useRef } from 'react';
import { render } from 'react-dom';
import HighchartsReact from 'highcharts-react-official';
import highchartsExporting from 'highcharts/modules/exporting';

import Highcharts from 'highcharts';

import RadioGroup from './second';
highchartsExporting(Highcharts);

const LineChart = () => {
  const chart = useRef();
const chartOptions = {};

  return (

    <div>
          <RadioGroup></RadioGroup>
          <HighchartsReact
            ref={chart}
            highcharts={Highcharts}
            options={chartOptions}
          />
      <div>
        png{' '}
        <button
          onClick={() => {
            chart.current.chart.exportChart();
          }}
        >
          PNG
        </button>
      </div>
      <div>
        jpeg{' '}
        <button
          onClick={() => {
            chart.current.chart.exportChart({ type: 'image/jpeg' });
          }}
        >
          jpg
        </button>
      </div>
      <div>
        svg{' '}
        <button
          onClick={() => {
            chart.current.chart.exportChart({ type: 'image/svg+xml' });
          }}
        >
          svg
        </button>
      </div>
      <div>
        pdf{' '}
        <button
          onClick={() => {
            chart.current.chart.exportChart({ type: 'application/pdf' });
          }}
        >
          pdf
        </button>
      </div>

    </div>
  );
};

render(<LineChart />, document.getElementById('root'));
