import {BrushSelectedParams} from "./charts";

function getFlowerName(value: number) {
    if (value === 0) {
        return "setosa";
    } else if (value === 1) {
        return "versicolor";
    } else if (value === 2) {
        return "virginica";
    } else {
        return "unknown";
    }
}

export function optionVizScatter1(data: {[key: string]: {points: number[][], predictions: number[]}}, fsize: number, x_lable: string, y_lable: string): Object {
    return (
        {
            xAxis: [
                {
                    type: 'value',
                    name: x_lable,
                    scale: true,
                    nameLocation: 'middle',
                    nameGap: 35,
                    nameTextStyle: {
                        fontSize: 18,
                        fontStyle: 'bold'
                    },
                    axisLabel: {
                        formatter: '{value} cm'
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: y_lable,
                    scale: true,
                    nameLocation: 'middle',
                    nameGap: 50,
                    nameTextStyle: {
                        fontSize: 18,
                        fontStyle: 'bold'
                    },
                    axisLabel: {
                        formatter: '{value} cm'
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            tooltip: {
                showDelay: 0,
                formatter: function (params: any) {
                    const dataIndex = params.dataIndex;
                    const seriesName = params.seriesName;
                    // ? : if-else
                    const prediction = seriesName === 'correct'
                        ? data.correct.predictions[dataIndex]
                        : data.incorrect.predictions[dataIndex];

                    const flowerName = getFlowerName(prediction);

                    if (params.value.length > 1) {
                        return (
                            params.seriesName +
                            ' :<br/>' +
                            params.value[0] +
                            'cm ' +
                            params.value[1] +
                            'cm ' +
                            '<br/>Prediction: ' + flowerName
                        );
                    } else {
                        return (
                            params.seriesName +
                            ' :<br/>' +
                            params.name +
                            ' : ' +
                            params.value +
                            'cm ' +
                            '<br/>Prediction: ' + prediction
                        );
                    }
                },
                axisPointer: {
                    show: true,
                    type: 'cross',
                    lineStyle: {
                        type: 'dashed',
                        width: 1
                    }
                }
            },
            legend: {
                show: true,
                data: ['correct', 'incorrect'],
                left: 'center',
                bottom: '95%'
            },

            series: [
                {
                    symbolSize: 10,
                    name: 'correct',
                    data: data.correct.points,
                    type: 'scatter',
                    color: 'green',
                    emphasis: {
                        focus: 'series'
                    }
                },
                {
                    symbolSize: 10,
                    name: "incorrect",
                    data: data.incorrect.points,
                    type: 'scatter',
                    color: 'red',
                    emphasis: {
                        focus: 'series'
                    }
                }
            ]
        }
    )
}


export function optionVizScatter2(data: { [key: string]: number[][] }, fsize: number, onBrushSelected: (params: BrushSelectedParams) => void, highlightedPoints: number[][]): Object {

    return (
        {
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none',
                    },
                    brush: {
                        type: ['rect', 'polygon', 'lineX', 'lineY', 'clear'],
                    },
                    saveAsImage: {},
                },
            },
            brush: {
                throttleType: 'debounce',
                throttleDelay: 300,
                brushLink: 'all', // Link the brush selections across all charts
                outOfBrush: {
                    colorAlpha: 0.1, // Reduce the opacity of points outside the selected area
                },
            },
            xAxis: {
                min: 'dataMin'
            },
            yAxis: {
                min: 'dataMin'
            },
            series: [
                {
                    symbolSize: 10,
                    data: data.correct,
                    type: 'scatter',
                    color: 'green'
                },
                {
                    symbolSize: 10,
                    data: data.incorrect,
                    type: 'scatter',
                    color: 'red'
                },
                {
                    symbolSize: 10,
                    data: highlightedPoints,
                    type: 'scatter',
                    color: 'blue',
                }
            ]
        }
    )
}


