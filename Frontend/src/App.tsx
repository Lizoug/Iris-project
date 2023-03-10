import './App.css';
import { VizScatter_test } from "./visualisierung/charts";
import React, { useState, useEffect } from 'react';
import {dataVizScatter_test} from "./visualisierung/chart_data";


export default function App() {
    const [data, set_data] = useState(
        {
            "petal length vs. petal length": {
                "correct": [[]],
                "incorrect": [[]]
            },
           "petal length vs. petal width": {
                "correct": [[]],
                "incorrect": [[]]
            },
            "petal length vs. sepal length": {
                "correct": [[]],
                "incorrect": [[]]
            },
            "petal length vs. sepal width": {
                "correct": [[]],
                "incorrect": [[]]
            },
            "petal width vs. petal length": {
                "correct": [[]],
                "incorrect": [[]]
            },
            "petal width vs. petal width": {
                "correct": [[]],
                "incorrect": [[]]
            },
            "petal width vs. sepal length": {
                "correct": [[]],
                "incorrect": [[]]
            },
            "petal width vs. sepal width": {
                "correct": [[]],
                "incorrect": [[]]
            },
            "sepal length vs. petal length": {
                "correct": [[]],
                "incorrect": [[]]
            },
            "sepal length vs. petal width": {
                "correct": [[]],
                "incorrect": [[]]
            },
            "sepal length vs. sepal length": {
                "correct": [[]],
                "incorrect": [[]]
            },
            "sepal length vs. sepal width": {
                "correct": [[]],
                "incorrect": [[]]
            },
            "sepal width vs. petal length": {
                "correct": [[]],
                "incorrect": [[]]
            },
            "sepal width vs. petal width": {
                "correct": [[]],
                "incorrect": [[]]
            },
            "sepal width vs. sepal length": {
                "correct": [[]],
                "incorrect": [[]]
            },
            "sepal width vs. sepal width": {
                "correct": [[]],
                "incorrect": [[]]
            }
    });

    const apiUrl = 'http://localhost:8000/api/datapoints';

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(apiUrl);
            const test = await response.json();
        console.log(test)
        set_data(prevState => ({ ...prevState, ...test }))
        };
        fetchData();
    }, [apiUrl]);

    useEffect(() => {
        console.log(data);
    }, [data]);


    return (
        <div>
            <h1 className={"title"}>
                Iris Flower
            </h1>
            {VizScatter_test(data,"400px", 7)}

        </div>
    );
}




/*export default function App() {

    return (
    <div>
        <h1 className={"title"}>
            Iris Flower
        </h1>
        <h1>Testinggg</h1>
        {VizScatter_test(VizScatter_test,"400px", 7)}
    </div>


  );
}*/




