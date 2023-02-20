from functools import lru_cache
from pydantic import BaseSettings


class Settings(BaseSettings):
    base_url = "/api"


@lru_cache()
def get_settings() -> Settings:
    return Settings()
