import React, { useEffect, useRef } from 'react';
import Plotly from 'plotly.js-basic-dist';

function Graph({ functionToGraph, rangeIn = -20, rangeEnd = 20 }) {
  const plotRef = useRef(null);

  useEffect(() => {
    const x = Array.from({ length: 10000 }, (_, i) => {
        const step = ( rangeEnd - (rangeIn) ) / 10000;
        return (rangeIn) + i * step;
      });
      const y = x.map((val) => functionToGraph(val));

    const plotData = [
      {
        x: x,
        y: y,
        type: 'scatter',
        mode: 'lines',
        marker: { color: 'blue' },
      },
    ];

    const plotLayout = {
      width: 1100,
      height: 700,
      title: 'Gráfica de f(x)',
      xaxis: { title: 'x' },
      yaxis: { title: 'f(x)' },
    };

    Plotly.newPlot(plotRef.current, plotData, plotLayout);
  }, [functionToGraph]);

  return <div ref={plotRef} />;
}

export default Graph;
