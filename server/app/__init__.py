from .main import app  # re-export app

from .routers.documents import router as documents_router
from .routers.workflow import router as workflow_router
from .routers.websearch import router as websearch_router

app.include_router(documents_router)
app.include_router(workflow_router)
app.include_router(websearch_router)
