import uvicorn
from fastapi import FastAPI, HTTPException
from backend.models import EvaluateRequest, EvaluateResponse, TriageResult
from backend.services.interpreter import InputInterpreter
from backend.services.normalizer import SignalNormalizer
from backend.services.detector import AnomalyDetector
from backend.services.analyzer import ResponseAnalyzer
from backend.services.triage_engine import TriageEngine
from backend.services.action_generator import ActionGenerator
from backend.utils.self_consistency import SelfConsistencyMechanism
from backend.utils.formatter import ResponseFormatter

app = FastAPI(title="After Discharge: Agentic Care Companion")

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
    # Add hidden signals to symptoms if not already there
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

@app.post("/evaluate", response_model=EvaluateResponse)
async def evaluate(request: EvaluateRequest):
    try:
        # Use Self-Consistency Mechanism
        final_result = consistency.process(run_pipeline, request.query, request.assets)
        
        # 7. RESPONSE FORMATTER
        formatted_output = formatter.format(final_result)
        
        return EvaluateResponse(output=formatted_output)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
