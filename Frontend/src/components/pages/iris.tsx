import '../../App.css';
import {VizScatter} from "../../visualisierung/charts";
import React, { useState, useEffect } from 'react';
import {Col, Row} from "antd";


export default function Iris() {
    const [data, set_data] = useState(
        {
            "petal length vs. petal length": {
                "correct": {
                    "points": [[]],
                    "predictions": []
                },
                "incorrect": {
                    "points": [[]],
                    "predictions": []
                }
            },
            "petal length vs. petal width": {
                    "correct": {
                        "points": [[]],
                        "predictions": []
                    },
                    "incorrect": {
                        "points": [[]],
                        "predictions": []
                    }
            },
            "petal length vs. sepal length": {
                    "correct": {
                        "points": [[]],
                        "predictions": []
                    },
                    "incorrect": {
                        "points": [[]],
                        "predictions": []
                    }
            },
            "petal length vs. sepal width": {
                    "correct": {
                        "points": [[]],
                        "predictions": []
                    },
                    "incorrect": {
                        "points": [[]],
                        "predictions": []
                    }
            },
            "petal width vs. petal length": {
                "correct": {
                    "points": [[]],
                    "predictions": []
                },
                "incorrect": {
                    "points": [[]],
                    "predictions": []
                }
            },
            "petal width vs. petal width": {
                    "correct": {
                        "points": [[]],
                        "predictions": []
                    },
                    "incorrect": {
                        "points": [[]],
                        "predictions": []
                    }
            },
            "petal width vs. sepal length": {
                    "correct": {
                        "points": [[]],
                        "predictions": []
                    },
                    "incorrect": {
                        "points": [[]],
                        "predictions": []
                    }
            },
            "petal width vs. sepal width": {
                    "correct": {
                        "points": [[]],
                        "predictions": []
                    },
                    "incorrect": {
                        "points": [[]],
                        "predictions": []
                    }
            },
            "sepal length vs. petal length": {
                    "correct": {
                        "points": [[]],
                        "predictions": []
                    },
                    "incorrect": {
                        "points": [[]],
                        "predictions": []
                    }
            },
            "sepal length vs. petal width": {
                    "correct": {
                        "points": [[]],
                        "predictions": []
                    },
                    "incorrect": {
                        "points": [[]],
                        "predictions": []
                    }
            },
            "sepal length vs. sepal length": {
                    "correct": {
                        "points": [[]],
                        "predictions": []
                    },
                    "incorrect": {
                        "points": [[]],
                        "predictions": []
                    }
            },
            "sepal length vs. sepal width": {
                    "correct": {
                        "points": [[]],
                        "predictions": []
                    },
                    "incorrect": {
                        "points": [[]],
                        "predictions": []
                    }
            },
            "sepal width vs. petal length": {
                    "correct": {
                        "points": [[]],
                        "predictions": []
                    },
                    "incorrect": {
                        "points": [[]],
                        "predictions": []
                    }
            },
            "sepal width vs. petal width": {
                    "correct": {
                        "points": [[]],
                        "predictions": []
                    },
                    "incorrect": {
                        "points": [[]],
                        "predictions": []
                    }
            },
            "sepal width vs. sepal length": {
                    "correct": {
                        "points": [[]],
                        "predictions": []
                    },
                    "incorrect": {
                        "points": [[]],
                        "predictions": []
                    }
            },
            "sepal width vs. sepal width": {
                    "correct": {
                        "points": [[]],
                        "predictions": []
                    },
                    "incorrect": {
                        "points": [[]],
                        "predictions": []
                    }
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
        <div className="babyblue-body">
            <div className="page-container">
                <div className="iris-body">
                    <Row className="title-row">
                        <h2 className="page-h2">Iris Flower Dataset Visualizations</h2>
                    </Row>
                    <Row>
                        <p className="iris-description">
                            The Iris Flower Dataset is a famous dataset in machine learning and data visualization.
                            This page presents various visualizations of the dataset to help understand the relationships between different features.
                        </p>
                    </Row>
                    <Row className="chart-container">
                        <Col span={24}>
                            <div className="my-scatter-plot">
                                {VizScatter(data, "700px", "500px", 7)}
                            </div>
                        </Col>
                    </Row>


                </div>
            </div>
        </div>

    );
}






