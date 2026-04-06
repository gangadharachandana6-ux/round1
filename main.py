from fastapi import FastAPI
from pydantic import BaseModel
from agent import run_agent
app = FastAPI()
class Request(BaseModel):
    message: str
@app.post("/log")
def log_interaction(req: Request):
    result = run_agent(req.message)
    return {"summary": result}
