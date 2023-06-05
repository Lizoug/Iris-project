from pydantic import BaseModel
from fastapi import (APIRouter, Path, Query, Body)
from toolbox.iris_functions import ABC, create_dataset, eval_knn, iris_data
from joblib import load
from sklearn.datasets import load_iris

router = APIRouter()


@router.get("/test")
async def test():
    result = ABC(17)
    return result


@router.get("/datapoints")
async def datapoints():
    # create datasets
    X_train, X_test, y_train, y_test = create_dataset()

    # evaluate model
    pred_eval, predictions = eval_knn(model_path="ml_models/knn_iris.joblib", X_test=X_test, y_test=y_test)

    # get iris data
    data = iris_data(X_test, pred_eval, predictions)

    return data



class FlowerInput(BaseModel):
    sepal_length: float
    sepal_width: float
    petal_length: float
    petal_width: float

@router.post("/predict")
async def predict(input_data: FlowerInput = Body(...)):
    sepal_length = input_data.sepal_length
    sepal_width = input_data.sepal_width
    petal_length = input_data.petal_length
    petal_width = input_data.petal_width

    # Load the saved model
    model = load("ml_models/knn_iris.joblib")

    # Load the iris dataset
    iris_data = load_iris()

    # Predict the iris flower type
    X_new = [[sepal_length, sepal_width, petal_length, petal_width]]
    prediction = model.predict(X_new)

    # Ensure that the prediction is an integer
    predicted_index = int(prediction[0])

    flower_type = iris_data.target_names[predicted_index]

    # Return the predicted flower type as a JSON response
    return {"flower_type": flower_type}

