import React, { useState, useEffect } from 'react';

import { Gauge } from '@ant-design/plots';



const Speedmeter = ({ downloadNumber,uploadNumber,switchNum}) => {

    // const Normalizer = (min, max) => ({
    //     normalize: (x) => min + x * (max - min),
    //     denormalize: (x) => (x + max) / (max - min)
    //   });
    //   const gaugeNormalizer = Normalizer(0, 100);

  

 

      
    const config = {
        percent: switchNum ? (uploadNumber / 100) : (downloadNumber / 100),
        radius: 0.8,
       autoFit: true,
      
        range: {
            color: ["#1B70EE","#cce0ff"],

            width: 32,
        },
        indicator: {
            pointer: {
                style: {
                    stroke: '#1B70EE',
                },
            },
            pin: {

                style: {
                    stroke: '#1B70EE',
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
                count: 0,

            },

         
            tickInterval:0.1
        },
        
        statistic: {
            content: {
                formatter: ({ percent }) => `${percent ? percent * 100 : "--"}`,
            },
            style: {

                color: 'rgba(0,0,0,0.65)',
               
            },
        },
        gaugeStyle: {
            lineCap: 'round',
        },
    };
    return <Gauge {...config} />;
};


export default Speedmeter;
