import React from 'react'
import { ResponsiveLine } from '@nivo/line'
// documentation for this is https://nivo.rocks/line/

export default function Chart({data, y_legend, x_legend, color}) {
    return (
        <div style={{height: 500}}>
        <ResponsiveLine
        data={data}
        margin={{ top: 30, right: 110, bottom: 30, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: `Year ${x_legend}`,
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: `${y_legend}`,
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'pink_yellowGreen' }}
        curve="natural"
        enableArea={false}
        enablePoints={true}
        lineWidth={3}
        pointSize={4}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: -20,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: color,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: color,
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </div>
    )
}
