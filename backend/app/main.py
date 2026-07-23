from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="BillWise API",
    description="Billing Management System Backend",
    version="1.0.0",
)

# Allow React frontend to communicate with FastAPI
origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "Welcome to BillWise API 🚀",
        "status": "Running",
    }