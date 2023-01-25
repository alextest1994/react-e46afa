import React, { useState, useRef, Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import highchartsExporting from 'highcharts/modules/exporting';
import Highcharts from 'highcharts';

const RadioGroup = () => {
  const chart = {};
  const chartOptions = useRef();

  {
    return (
      <div>
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
