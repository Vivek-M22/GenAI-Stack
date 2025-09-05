from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/websearch", tags=["websearch"])

class SearchPayload(BaseModel):
    query: str

@router.post("")
async def search(payload: SearchPayload):
    # TODO: integrate SerpAPI/Brave
    return {"results": [
        {"title": "Stub result", "url": "https://example.com", "snippet": payload.query}
    ]}
