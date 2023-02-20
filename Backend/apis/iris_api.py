from fastapi import (APIRouter, Path, Query)
from toolbox.iris_functions import ABC, create_dataset, eval_knn, iris_data

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
    pred_eval = eval_knn(model_path="ml_models/knn_iris.joblib", X_test=X_test, y_test=y_test)

    # get iris data
    data = iris_data(X_test, pred_eval)

    return data
