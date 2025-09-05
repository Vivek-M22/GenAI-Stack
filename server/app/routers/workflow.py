from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/workflow", tags=["workflow"])

class RunPayload(BaseModel):
    query: str
    nodes: list | None = None
    edges: list | None = None

@router.post("/run")
async def run_workflow(payload: RunPayload):
    # TODO: orchestrate KB -> LLM -> output
    return {"answer": f"Echo: {payload.query}"}
