import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Gauge } from '@ant-design/plots';



const Speedmeter = ({ downloadNumber,uploadNumber,switchNum}) => {

    // const Normalizer = (min, max) => ({
    //     normalize: (x) => min + x * (max - min),
    //     denormalize: (x) => (x + max) / (max - min)
    //   });
    //   const gaugeNormalizer = Normalizer(0, 100);

  

 

    const config = {
        percent: 0.1,
        range: {
          color: '#30BF78',
          
        },
        indicator: {
          pointer: {
            style: {
              stroke: '#D0D0D0',
            },
          },
          pin: {
            style: {
              stroke: '#D0D0D0',
            },
          },
        },
        axis: {
          label: {
            formatter(v) {
              return Number(v) * 100;
            },
          },
          subTickLine: {
            count: 3,
          },
        },
        statistic: {
          content: {
            formatter: ({ percent }) => `Rate: ${(percent * 100).toFixed(0)}%`,
            style: {
              color: 'rgba(0,0,0,0.65)',
              fontSize: 48,
            },
          },
        },
      };
      return <Gauge {...config} />;
};


export default Speedmeter;
