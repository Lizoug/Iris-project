from sklearn import datasets
import pandas as pd
import numpy as np
from joblib import dump, load
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score
from sklearn.metrics import classification_report

from models.iris_models import Test



def create_dataset():
    # load data
    data = datasets.load_iris()

    # build pandas data frame
    data = pd.DataFrame(
        data=np.c_[data['data'], data['target']],
        columns=data['feature_names'] + ['target'])

    # Droping the target since we only need the measurements
    X = data.drop(['target'], axis=1)

    # converting into numpy array and assigning petal length and petal width
    X = X.to_numpy()
    y = data['target']

    # Splitting into train and test
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.85, random_state=42)

    return X_train, X_test, y_train, y_test


def train_knn(X_train, y_train, model_path):
    # build model
    model = KNeighborsClassifier(n_neighbors=5)

    # train model
    model.fit(X_train, y_train)

    # save model
    dump(model, model_path)


def eval_knn(model_path, X_test, y_test):
    # load model
    model = load(model_path)

    # evaluate model on test data
    prediction = model.predict(X_test)

    # accuracy
    print(f'Test Accuracy: {accuracy_score(y_test, prediction)}')

    # Precision Recall scores
    print(f'Classification Report: \n {classification_report(y_test, prediction)}')

    y_test = y_test.to_numpy()
    pred_eval = []
    for i in range(len(prediction)):
        if prediction[i] == y_test[i]:
            pred_eval.append('correct')
        else:
            pred_eval.append('incorrect')

    return pred_eval, prediction



def iris_data(X_test, pred_eval, predictions):
    # Columns to create scatter plots for
    features = ['petal length', 'petal width', 'sepal length', 'sepal width']

    # create return object
    return_obj = dict()

    # iterates over the rows of the grid of subplots
    for i, feature_1 in enumerate(features):
        # iterates over the columns
        for j, feature_2 in enumerate(features):

            mask_correct = np.array(pred_eval) == "correct"
            mask_incorrect = np.array(pred_eval) == "incorrect"

            datapoints_correct = X_test[:, [i, j]][mask_correct].tolist()
            datapoints_incorrect = X_test[:, [i, j]][mask_incorrect].tolist()

            # Store numpy array of dots in dictionary
            feature_combi = f'{feature_1} vs. {feature_2}'
            if feature_combi not in return_obj:
                return_obj[feature_combi] = {
                    "correct": {
                        "points": datapoints_correct,
                        "predictions": predictions[mask_correct].tolist()
                    },
                    "incorrect": {
                        "points": datapoints_incorrect,
                        "predictions": predictions[mask_incorrect].tolist()
                    }
                }

    return return_obj


def ABC(n: float):
    return_object = Test(name="Test", value=n)
    return return_object


if __name__ == "__main__":
    # create datasets
    X_train, X_test, y_train, y_test = create_dataset()
    # train model
    train_knn(X_train, y_train, model_path="../ml_models/knn_iris.joblib")
    # evaluate model
    pred_eval = eval_knn(model_path="../ml_models/knn_iris.joblib", X_test=X_test, y_test=y_test)
