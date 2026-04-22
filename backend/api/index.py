from fastapi import FastAPI, Request

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Backend running"}

@app.post("/evaluate")
async def evaluate(request: Request):
    body = await request.json()
    query = body.get("query", "").lower()

    if "chest pain" in query or "unconscious" in query:
        triage = "RED"
        reason = "Critical symptoms detected including chest pain or unconsciousness"
        action = "Initiate emergency response, call 112, share live location, provide first-aid instructions"
        confidence = "HIGH"

    elif "dizzy" in query or "tired" in query:
        triage = "AMBER"
        reason = "Moderate symptoms like dizziness or fatigue detected"
        action = "Alert care coordinator and schedule teleconsult"
        confidence = "MEDIUM"

    else:
        triage = "GREEN"
        reason = "No significant symptoms detected"
        action = "Log status and schedule next check-in"
        confidence = "HIGH"

    output = f"""TRIAGE: {triage}
REASON: {reason}
ACTION: {action}
CONFIDENCE: {confidence}"""

    return {"output": output}
