import React, {useState} from "react";
import axios from 'axios';
import {Col, Row} from "antd";


export function FlowerPredictor() {

    const [sepalLength, setSepalLength] = useState('');
    const [sepalWidth, setSepalWidth] = useState('');
    const [petalLength, setPetalLength] = useState('');
    const [petalWidth, setPetalWidth] = useState('');
    const [flowerType, setFlowerType] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const inputData = {
                sepal_length: parseFloat(sepalLength),
                sepal_width: parseFloat(sepalWidth),
                petal_length: parseFloat(petalLength),
                petal_width: parseFloat(petalWidth),
            };

            console.log('Input Data:', inputData); // Debugging print statement

            const response = await axios.post('http://localhost:8000/api/predict', inputData);

            console.log('Response:', response);

            if (response.data && response.data.flower_type) {
                setFlowerType(response.data.flower_type);
            } else {
                console.error('Error: Unexpected response format');
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                console.error('Error predicting flower type:', error.response.data);
            } else {
                console.error('Error:', error);
            }
        }
    };

    return (
        <div className="babyblue-body">
            <div className="page-container">
                <div className="iris-body">
                    <Row className="title-row">
                        <h2 className="page-h2">Iris Flower Prediction</h2>
                    </Row>
                    <Row>
                        <p className="iris-description">
                            Once you have entered all four values, click on the 'Predict' button to see what type of flower our model predicts it to be.
                        </p>
                    </Row>
                    <Row className="chart-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">
                                    Sepal Length:
                                    <input
                                        type="number"
                                        value={sepalLength}
                                        onChange={(e) => setSepalLength(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    Sepal Width:
                                    <input
                                        type="number"
                                        value={sepalWidth}
                                        onChange={(e) => setSepalWidth(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    Petal Length:
                                    <input
                                        type="number"
                                        value={petalLength}
                                        onChange={(e) => setPetalLength(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    Petal Width:
                                    <input
                                        type="number"
                                        value={petalWidth}
                                        onChange={(e) => setPetalWidth(e.target.value)}
                                    />
                                </label>
                            </div>
                            <button className="submit-button" type="submit">Predict</button>
                        </form>
                    </Row>
                </div>
            </div>
            <div className="page-container">
                <div className="chart-container">
                    <div className="iris-body">
                        {flowerType && <p>Predicted Flower Type: {flowerType}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}
