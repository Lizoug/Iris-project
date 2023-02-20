import './App.css';
import { VizScatter_test } from "./visualisierung/charts";
import React, { useState, useEffect } from 'react';
import {dataVizScatter_test} from "./visualisierung/chart_data";


export default function App() {
    const [data, set_data] = useState({});
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





