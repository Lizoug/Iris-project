import ReactEcharts from "echarts-for-react";
import React from "react";
import { Col, Row } from 'antd';
import {optionVizScatter1} from "./chart_options";
import {optionVizScatter2} from "./chart_options";



export function VizScatter_test (data: {[key: string]: {[key: string]: number[][]}}, height: string, fsize: number) {
    return (
        <div>
            <Row>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter1(data["petal length vs. petal length"], fsize)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter1(data["petal length vs. petal width"], fsize)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter1(data["petal length vs. sepal length"], fsize)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter1(data["petal length vs. sepal width"], fsize)}
                    />
                </Col>
            </Row>

            <Row>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter1(data["petal width vs. petal length"], fsize)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter1(data["petal width vs. petal width"], fsize)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter1(data["petal width vs. sepal length"], fsize)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter1(data["petal width vs. sepal width"], fsize)}
                    />
                </Col>
            </Row>

            <Row>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter1(data["sepal length vs. petal length"], fsize)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter1(data["sepal length vs. petal width"], fsize)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter1(data["sepal length vs. sepal length"], fsize)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter1(data["sepal length vs. sepal width"], fsize)}
                    />
                </Col>
            </Row>

            <Row>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter1(data["sepal width vs. petal length"], fsize)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter1(data["sepal width vs. petal width"], fsize)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter1(data["sepal width vs. sepal length"], fsize)}
                    />
                </Col>
                <Col span={6}>
                    <ReactEcharts
                        style={{height: height}}
                        option={optionVizScatter1(data["sepal width vs. sepal width"], fsize)}
                    />
                </Col>
            </Row>
        </div>
    )
}



