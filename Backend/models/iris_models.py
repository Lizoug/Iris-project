from pydantic import BaseModel


class Test(BaseModel):
    name: str
    value: float


class IrisDataPoints(BaseModel):
    data: dict[str, list[tuple[float, float]]]


class IrisCategories(BaseModel):
    data: dict[str, IrisDataPoints]


class FlowerInput(BaseModel):
    sepal_length: float
    sepal_width: float
    petal_length: float
    petal_width: float


