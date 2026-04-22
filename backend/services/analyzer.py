import re
from backend.models import Tone

class ResponseAnalyzer:
    def analyze_tone(self, query: str) -> Tone:
        query = query.lower()
        
        distress_keywords = ["help", "emergency", "dying", "can't breathe", "scared", "intense", "painful", "worst"]
        concern_keywords = ["worried", "not sure", "unusual", "different", "feeling weird", "strange"]
        
        if any(word in query for word in distress_keywords):
            return Tone.DISTRESS
        if any(word in query for word in concern_keywords):
            return Tone.CONCERN
            
        return Tone.NORMAL

    def detect_hidden_signals(self, query: str) -> list:
        # Detect signals that might not be explicit in the primary extractor
        hidden = []
        if re.search(r"feel like (?:i'm )?gonna (?:faint|collapse)", query.lower()):
            hidden.append("Presyncope detected")
        if re.search(r"everything is (?:blurry|dark)", query.lower()):
            hidden.append("Visual disturbance detected")
        return hidden
