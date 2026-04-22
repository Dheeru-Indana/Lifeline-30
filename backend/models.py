from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any
from enum import Enum

class TriageLevel(str, Enum):
    GREEN = "GREEN"
    AMBER = "AMBER"
    RED = "RED"

class ConfidenceLevel(str, Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"

class Tone(str, Enum):
    NORMAL = "NORMAL"
    CONCERN = "CONCERN"
    DISTRESS = "DISTRESS"

class EvaluateRequest(BaseModel):
    query: str
    assets: Optional[List[str]] = Field(default_factory=list)

class EvaluateResponse(BaseModel):
    output: str

class ExtractedSignals(BaseModel):
    symptoms: List[str] = Field(default_factory=list)
    behavior: List[str] = Field(default_factory=list)
    vitals: Dict[str, Any] = Field(default_factory=dict)
    risk_flags: List[str] = Field(default_factory=list)
    time_context: str = ""
    severity_keywords: List[str] = Field(default_factory=list)

class NormalizedSignals(BaseModel):
    symptoms: List[str]
    behavior: List[str]
    vitals: Dict[str, Any]
    risk_flags: List[str]
    time_context: str
    tone: Tone = Tone.NORMAL

class TriageResult(BaseModel):
    triage: TriageLevel
    reason: str
    action: str
    confidence: ConfidenceLevel
