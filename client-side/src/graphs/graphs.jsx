import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import Stack from '@mui/material/Stack';
import { legendClasses } from '@mui/x-charts/ChartsLegend';
import { PieChart } from '@mui/x-charts/PieChart';
import { Gauge } from '@mui/x-charts/Gauge';

export default function StackedAreas() {

    const series = [
        {
            type: 'bar',
            yAxisKey: 'eco',
            data: [2, 5, 3, 4, 1, 2],
        },
        {
            type: 'bar',
            color: 'red',
            yAxisKey: 'eco',
            data: [5, 6, 2, 8, 9, 10],
        },
        {
            type: 'bar',
            color: 'blue',
            yAxisKey: 'eco',
            data: [5, 6, 2, 8, 9, 10],
        },
        {
            type: 'line',
            yAxisKey: 'pib',
            color: 'red',
            data: [1000, 1500, 3000, 5000, 10000],
        },
        {
            type: 'line',
            yAxisKey: 'pib',
            color: 'yellow',
            data: [1200, 1500, 300, 1000, 1600],
        },
    ];




    const years = [
        new Date(1990, 0, 1),
        new Date(1991, 0, 1),
        new Date(1992, 0, 1),
        new Date(1993, 0, 1),
        new Date(1994, 0, 1),
        new Date(1995, 0, 1),
        new Date(1996, 0, 1),
        new Date(1997, 0, 1),
        new Date(1998, 0, 1),
        new Date(1999, 0, 1),
        new Date(2000, 0, 1),
        new Date(2001, 0, 1),
        new Date(2002, 0, 1),
        new Date(2003, 0, 1),
        new Date(2004, 0, 1),
        new Date(2005, 0, 1),
        new Date(2006, 0, 1),
        new Date(2007, 0, 1),
        new Date(2008, 0, 1),
        new Date(2009, 0, 1),
        new Date(2010, 1, 5),
        new Date(2011, 0, 1),
        new Date(2012, 0, 1),
        new Date(2013, 0, 1),
        new Date(2014, 0, 1),
        new Date(2015, 0, 1),
        new Date(2016, 0, 1),
        new Date(2017, 0, 1),
        new Date(2018, 0, 1),
    ];

    const TelAvivGDPperCapita = [
        100000, 28294.264, 28619.805, 28336.16, 28907.977, 29418.863, 29736.645, 30341.807,
        31323.078, 32284.611, 33409.68, 33920.098, 34152.773, 34292.03, 35093.824,
        35495.465, 36166.16, 36845.684, 100065, 35534.926, 36086.727, 36691, 36571,
        36632, 36527, 36827, 37124, 37895, 38515.918,
    ];

    const BneyBrakGDPperCapita = [
        1, 25792.014, 25790.186, 26349.342, 27277.543, 27861.215, 28472.248, 29259.764,
        30077.385, 30932.537, 31946.037, 100000, 33278.3, 34232.426, 34865.78,
        35623.625, 36214.07, 36816.676, 36264.79, 34402.36, 34754.473, 34971, 35185, 35618,
        36436, 36941, 37334, 37782.83, 38058.086,
    ];

    const RamatGanGDPperCapita = [
        5, 26769.96, 27385.055, 27250.701, 28140.057, 28868.945, 29349.982, 30186.945,
        31129.584, 32087.604, 33367.285, 34260.29, 34590.93, 34716.44, 35528.715,
        36205.574, 38014.137, 39752.207, 40715.434, 38962.938, 41109.582, 43189, 43320,
        43413, 43922, 44293, 144689, 145619.785, 146177.617,
    ];
    const otherProps = {
        width: 400,
        height: 200,
        sx: {
            [`.${legendClasses.root}`]: {
                transform: 'translate(20px, 0)',
            },
        },
    };

    const data = [
        { team: 'Python', rank: 3, points: 31, color: "red" },
        { team: 'React', rank: 1, points: 50, color: "orange" },
        { team: 'Java', rank: 4, points: 18, color: "yellow" },
        { team: 'Angular', rank: 2, points: 37, color: "lightgreen" },
        { team: 'C#', rank: 5, points: 6, color: "blue" },
    ];


    return (
        <>



            <Stack direction="row" width="100%" textAlign="center" spacing={2}>

                <Gauge width={200} height={200} value={70} valueMin={5} valueMax={100} />
                
                <PieChart
                    series={[
                        {
                            data: data.map((d) => ({ label: d.team, id: d.team, value: d.points, color: d.color })),
                        },
                    ]}
                    {...otherProps}
                />


            </Stack>

            <LineChart
                xAxis={[
                    {
                        id: 'Years',
                        data: years,
                        scaleType: 'time',
                        valueFormatter: (date) => date.getFullYear().toString(),
                    },
                ]}
                series={[
                    {
                        id: 'Tel-Aviv',
                        label: 'Tel-Aviv',
                        data: TelAvivGDPperCapita,
                        stack: 'total',
                        area: true,
                        showMark: true,
                    },
                    {
                        id: 'Bney-Brak',
                        label: 'Bney-Brak',
                        data: BneyBrakGDPperCapita,
                        stack: 'total',
                        area: true,
                        showMark: false,
                    },
                    {
                        id: 'Ramat-Gan',
                        label: 'Ramat-Gan',
                        data: RamatGanGDPperCapita,
                        stack: 'total',
                        area: true,
                        showMark: false,
                    },
                ]}
                width={600}
                height={400}
                margin={{ left: 70 }}
            />



            <ChartContainer
                series={series}
                width={500}
                height={400}
                xAxis={[
                    {
                        id: 'years',
                        data: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
                        scaleType: 'band',
                        valueFormatter: (value) => value.toString(),
                    },
                ]}
                yAxis={[
                    {
                        id: 'eco',
                        scaleType: 'linear',
                    },
                    {
                        id: 'pib',
                        scaleType: 'log',
                    },
                ]}
            >
                <BarPlot />
                <LinePlot />
                <ChartsXAxis label="Years" position="bottom" axisId="years" />
                <ChartsYAxis label="Results" position="left" axisId="eco" />
                {/* <ChartsYAxis label="PIB" position="right" axisId="pib" /> */}
            </ChartContainer>


        </>
    );
}


