import React from 'react';
import { ResponsiveBump } from '@nivo/bump';

const transformData = (data) => {
  return data.map((serie) => ({
    ...serie,
    id: serie.id,
    data: serie.data.map((d) => ({
      ...d,
      x: d.x.toString().slice(2), // Mostrar solo los dos últimos dígitos del año
    })),
  }));
};

const BumpChart = ({ data }) => (
 
    <ResponsiveBump
      data={transformData(data)}
      colors={{ scheme: 'spectral' }}
      lineWidth={3}
      activeLineWidth={6}
      inactiveLineWidth={3}
      inactiveOpacity={0.15}
      pointSize={10}
      activePointSize={16}
      inactivePointSize={0}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={3}
      activePointBorderWidth={3}
      pointBorderColor={{ from: 'serie.color' }}
      axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendPosition: 'middle',
        legendOffset: -36
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendPosition: 'middle',
        legendOffset: 32
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'ranking',
        legendPosition: 'middle',
        legendOffset: -40
      }}
      margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
      axisRight={null}
    />

);

export default BumpChart;
