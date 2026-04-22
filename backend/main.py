import uvicorn
import os
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from backend.models import EvaluateRequest, EvaluateResponse, TriageResult
from backend.services.interpreter import InputInterpreter
from backend.services.normalizer import SignalNormalizer
from backend.services.detector import AnomalyDetector
from backend.services.analyzer import ResponseAnalyzer
from backend.services.triage_engine import TriageEngine
from backend.services.action_generator import ActionGenerator
from backend.utils.self_consistency import SelfConsistencyMechanism
from backend.utils.formatter import ResponseFormatter

app = FastAPI(title="Lifeline-30: Agentic Care Companion API")

# Configure CORS
allowed_origins = os.getenv("ALLOWED_ORIGINS", "*").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Agents
interpreter = InputInterpreter()
normalizer = SignalNormalizer()
detector = AnomalyDetector()
analyzer = ResponseAnalyzer()
triage_engine = TriageEngine()
action_generator = ActionGenerator()
consistency = SelfConsistencyMechanism()
formatter = ResponseFormatter()

def run_pipeline(query: str, assets: list = None) -> TriageResult:
    # 1. INPUT INTERPRETER
    extracted = interpreter.interpret(query)
    
    # 2. SIGNAL NORMALIZER
    normalized = normalizer.normalize(extracted)
    
    # 3. RESPONSE ANALYZER (Tone and Hidden Signals)
    normalized.tone = analyzer.analyze_tone(query)
    hidden_signals = analyzer.detect_hidden_signals(query)
    for signal in hidden_signals:
        if signal not in normalized.symptoms:
            normalized.symptoms.append(signal)

    # 4. ANOMALY DETECTOR
    anomalies = detector.detect(normalized)
    
    # 5. TRIAGE ENGINE
    result = triage_engine.evaluate(normalized, anomalies)
    
    # 6. ACTION GENERATOR
    result.action = action_generator.generate(result.triage)
    
    return result

@app.get("/")
async def home():
    return {
        "status": "online",
        "service": "Lifeline-30 AI Backend",
        "version": "1.0.0",
        "docs": "/docs"
    }

@app.get("/health")
async def health():
    return {"status": "healthy"}

@app.post("/v1/answer", response_model=EvaluateResponse)
async def answer(request: EvaluateRequest):
    """
    Main triage endpoint for automated evaluation.
    Takes a patient scenario and returns a structured triage response.
    """
    try:
        # Use Self-Consistency Mechanism for deterministic extraction
        final_result = consistency.process(run_pipeline, request.query, request.assets)
        
        # Format the output into the required structured string
        formatted_output = formatter.format(final_result)
        
        return EvaluateResponse(output=formatted_output)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Backward compatibility for /evaluate if needed
@app.post("/evaluate", response_model=EvaluateResponse)
async def evaluate(request: EvaluateRequest):
    return await answer(request)

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
