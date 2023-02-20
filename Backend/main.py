import uvicorn
from fastapi import FastAPI
from fastapi.routing import APIRoute
from apis.iris_api import router as IrisRouter
from fastapi.middleware.cors import CORSMiddleware
from config.settings import get_settings


origins = [
    "http://localhost:8000",
    "http://localhost:3000"
]

app = FastAPI(
    title="Explainability for Industrial Sensor Data Analysis Demonstrator",
    description="The first version of our research group demonstrator.",
    version="1.0.0",
    servers=[
        {"url": get_settings().base_url, "description": "Base Url"}
    ])


app.include_router(IrisRouter, prefix=get_settings().base_url)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def use_route_names_as_operation_ids(fast_app: FastAPI) -> None:
    """
    Simplify operation IDs so that generated API clients have simpler function names.
    Should be called only after all routes have been added.
    """
    for route in fast_app.routes:
        if isinstance(route, APIRoute):
            route.path = route.path.replace(get_settings().base_url, "")
            route.path_format = route.path.replace(get_settings().base_url, "")
            route.operation_id = route.name


use_route_names_as_operation_ids(app)


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
