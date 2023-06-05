import {optionVizScatter1, optionVizScatter2} from "./chart_options";
import ReactEcharts from "echarts-for-react";
import React, { useState } from "react";
import { Col, Row } from 'antd';
import { Select } from 'antd';

const { Option } = Select;




export function VizScatter(data: {[key: string]: {[key: string]: {points: number[][], predictions: number[]}}}, width: string, height: string, fsize: number) {
    // define two pieces of state, xAxis and yAxis, with initial values of "petal length" and "petal width".
    // These pieces of state will be updated later with the setXAxis and setYAxis functions.
    const [xAxis, setXAxis] = useState("petal length");
    const [yAxis, setYAxis] = useState("petal width");

    // update the xAxis and yAxis state values when the user selects a different option in the Select components.
    const handleXAxisChange = (value: string) => {
        setXAxis(value);
    };

    const handleYAxisChange = (value: string) => {
        setYAxis(value);
    };

    const option = optionVizScatter1(data[`${xAxis} vs. ${yAxis}`], fsize, xAxis, yAxis);
    // The Select components allow the user to choose which features will be displayed on the x and y axes of the
    // scatter plot. When the user selects a new option, the corresponding handleXAxisChange or handleYAxisChange
    // function is called, which updates the xAxis or yAxis state value
    return (
        <div>
            <Select defaultValue="petal length" onChange={handleXAxisChange}>
                <Option value="petal length">Petal Length</Option>
                <Option value="petal width">Petal Width</Option>
                <Option value="sepal length">Sepal Length</Option>
                <Option value="sepal width">Sepal Width</Option>
            </Select>
            <Select defaultValue="petal width" onChange={handleYAxisChange}>
                <Option value="petal length">Petal Length</Option>
                <Option value="petal width">Petal Width</Option>
                <Option value="sepal length">Sepal Length</Option>
                <Option value="sepal width">Sepal Width</Option>
            </Select>

            {/*The scatter plot with the selected features*/}
            <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Col span={15}>
                    <ReactEcharts
                        style={{ width: width, height: height }}
                        option={option}
                    />
                </Col>
            </Row>
            <Row>

            </Row>
        </div>
    );
}

export type BrushSelectedParams = {
    batch: {
        selected: {
            dataIndex: number[];
        }[];
    }[];
};





export function VizScatter_test (data: {[key: string]: {[key: string]: number[][]}}, height: string, fsize: number) {
    const [selectedPoints, setSelectedPoints] = useState<number[][]>([]);
    const onBrushSelected = (params: BrushSelectedParams) => {
        const selectedDataIndices = params.batch[0].selected[0].dataIndex;
        const newSelectedPoints = selectedDataIndices.map((index: number) => data["petal length vs. petal length"].correct[index]);
        setSelectedPoints(newSelectedPoints);
    };

    return (
        <div>
            <Row>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter2(data["petal length vs. petal length"], fsize, onBrushSelected, selectedPoints)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter2(data["petal length vs. petal width"], fsize, onBrushSelected, selectedPoints)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter2(data["petal length vs. sepal length"], fsize, onBrushSelected, selectedPoints)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter2(data["petal length vs. sepal width"], fsize, onBrushSelected, selectedPoints)}
                    />
                </Col>
            </Row>

            <Row>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter2(data["petal width vs. petal length"], fsize, onBrushSelected, selectedPoints)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter2(data["petal width vs. petal width"], fsize, onBrushSelected, selectedPoints)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter2(data["petal width vs. sepal length"], fsize, onBrushSelected, selectedPoints)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter2(data["petal width vs. sepal width"], fsize, onBrushSelected, selectedPoints)}
                    />
                </Col>
            </Row>

            <Row>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter2(data["sepal length vs. petal length"], fsize, onBrushSelected, selectedPoints)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter2(data["sepal length vs. petal width"], fsize, onBrushSelected, selectedPoints)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter2(data["sepal length vs. sepal length"], fsize, onBrushSelected, selectedPoints)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter2(data["sepal length vs. sepal width"], fsize, onBrushSelected, selectedPoints)}
                    />
                </Col>
            </Row>

            <Row>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter2(data["sepal width vs. petal length"], fsize, onBrushSelected, selectedPoints)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter2(data["sepal width vs. petal width"], fsize, onBrushSelected, selectedPoints)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter2(data["sepal width vs. sepal length"], fsize, onBrushSelected, selectedPoints)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter2(data["sepal width vs. sepal width"], fsize, onBrushSelected, selectedPoints)}
                    />
                </Col>
            </Row>
        </div>
    )
}



