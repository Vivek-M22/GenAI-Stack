from fastapi import APIRouter, UploadFile, File

router = APIRouter(prefix="/documents", tags=["documents"])

@router.post("/upload")
async def upload_document(file: UploadFile = File(...)):
    # TODO: Save file to storage and index later
    content = await file.read()
    size = len(content)
    return {"filename": file.filename, "size": size}
