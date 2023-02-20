export function optionVizScatter1(data: {[key: string]: number[][]}, fsize: number): Object {
    return (
        {
            xAxis: {
                min: 'dataMin'
            },
            yAxis: {
                min: 'dataMin'
            },
            series: [
                {
                    symbolSize: 10,
                    data: data["correct"],
                    type: 'scatter',
                    color: 'green'
                },
                {
                    symbolSize: 10,
                    data: data["incorrect"],
                    type: 'scatter',
                    color: 'red'
                }

            ]
        }
    )
}